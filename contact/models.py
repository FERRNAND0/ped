from django.db import models



# Create your models here.

class Contact(models.Model):
    full_name = models.CharField(max_length=150)
    email = models.EmailField()
    description = models.TextField()
    is_checked = models.BooleanField(default=False)
    crated_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)