from rest_framework.generics import ListAPIView, RetrieveAPIView 
from Posts.models import Article, Event
from .serializers import ArticleSerializer, EventSerializer

class ArticleListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class EventListView(ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class ArticleDetailView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class EventDetailView(RetrieveAPIView):
    queryset = Event.objects.all()
    serializer_class = ArticleSerializer
