from django.db import models
from django.urls import reverse


def get_absolute_url(self):
    return reverse("blog_post_detail", argss=[self.id])


