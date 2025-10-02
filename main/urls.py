from django.urls import path
from .views import index, about, contact, faq, luxov

urlpatterns = [
    path('', index, name='index'),
    path('about/', about, name='about'),
    path('contact/', contact, name='contact'),
    path('faq/', faq, name='faq'),
    path('luxov/', luxov, name='luxov'),
]