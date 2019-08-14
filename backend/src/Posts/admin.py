from django.contrib import admin
from .models import Event, Article

# Register your models here.
django_models = [Event, Article]
admin.site.register(django_models)
