from rest_framework import serializers
from Posts.models import Article, Event

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title', 'author', 'created_at', 'content')

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'title', 'author', 'group', 'created_at', 'event_location', 'event_time', 'content')