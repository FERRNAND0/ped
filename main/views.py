from django.shortcuts import render
from .forms import ContactForm
import requests
from django.conf import settings


TEXT = 'Привет! Это сообщение от Python 🐍'

def send_telegram_message(text):
    token= settings.BOT_TOKEN  # Ваш токен бота
    chat_id = settings.CHAT_ID  # ID чата, куда отправлять сообщения
    url = f'https://api.telegram.org/bot{token}/sendMessage'
    payload = {
        'chat_id': chat_id,
        'text': text,
        'parse_mode': 'HTML'  # или 'Markdown'
    }
    response = requests.post(url, data=payload)
    return response.json()




# Create your views here.
def index(request):
    return render(request, 'main/index.html')

def about(request):
    return render(request, 'main/about.html')

# def blog(request):
#     return render(request, 'main/blog.html')

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            send_telegram_message(f"New contact form submission:\n\n"
                                                               f"Full Name: {form.cleaned_data['full_name']}\n"
                                                               f"Email: {form.cleaned_data['email']}\n"
                                                               f"Description: {form.cleaned_data['description']}")

            return render(request, 'main/contact.html', {'form': form, 'success': True})
    else:
        form = ContactForm()
    return render(request, 'main/contact.html')

def faq(request):
    return render(request, 'main/faq.html')



