from django.urls import path
from .views import index, about, contact, blog, faq

urlpatterns = [
    path('', index, name='index'),
    path('about/', about, name='about'),
    path('contact/', contact, name='contact'),
    path('blog/', blog, name='blog'),
    path('faq/', faq, name='faq'),

]