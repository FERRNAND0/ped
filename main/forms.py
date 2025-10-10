from django import forms 
from .models import Contact
from .models import Index
class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['full_name', 'email', 'description']
class IndexForm(forms.ModelForm):
    class Meta:
        model = Index
        fields = ['email']


