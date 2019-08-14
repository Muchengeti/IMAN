from django.db import models

# Create your models here.

class Article(models.Model):
    title = models.CharField(max_length=120)
    author = models.CharField(max_length=120)
    created_at = models.DateTimeField(auto_now_add=True)
    content = models.TextField() 

    def __str__(self):
        return self.title

class Event(models.Model):
    title = models.CharField(max_length=120)
    author = models.CharField(max_length=120)
    group = models.CharField(max_length=120)
    created_at = models.DateTimeField(auto_now_add=True)
    event_location = models.CharField(max_length=120)
    event_time = models.CharField(max_length=120)
    content = models.TextField()

    def __str__(self):
        return self.title

