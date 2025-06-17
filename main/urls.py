from django.urls import path
from .views import index, about, contact, faq

urlpatterns = [
    path('', index, name='index'),
    path('about/', about, name='about'),
    path('contact/', contact, name='contact'),
    path('faq/', faq, name='faq'),
]

from main.sitemaps import StaticViewSitemap  # добавь этот импорт
...
sitemaps = {
    'static': StaticViewSitemap,
    
}
