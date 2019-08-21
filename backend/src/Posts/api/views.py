from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from Posts.models import Article, Event
from .serializers import ArticleSerializer, EventSerializer

from rest_framework import viewsets

class ArticleViewSet(viewsets.ModelViewSet):
      
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()

# class ArticleListView(ListAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

# class EventListView(ListAPIView):
#     queryset = Event.objects.all()
#     serializer_class = EventSerializer

# class ArticleDetailView(RetrieveAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

# class EventDetailView(RetrieveAPIView):
#     queryset = Event.objects.all()
#     serializer_class = ArticleSerializer

# class ArticleCreateView(CreateAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

# class EventCreateView(CreateAPIView):
#     queryset = Event.objects.all()
#     serializer_class = EventSerializer

# class ArticleUpdateView(UpdateAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

# class EventUpdateView(UpdateAPIView):
#     queryset = Event.objects.all()
#     serializer_class = EventSerializer

# class ArticleDeleteView(DestroyAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

# class EventDeleteView(DestroyAPIView):
#     queryset = Event.objects.all()
#     serializer_class = EventSerializer