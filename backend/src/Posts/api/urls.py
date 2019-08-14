from django.urls import path
from .views import ArticleListView, ArticleDetailView, EventListView, EventDetailView

urlpatterns = [
    path('articles', ArticleListView.as_view()),
    path('articles/ <pk>', ArticleDetailView.as_view()),
    path('events', EventListView.as_view()),
    path('events/<pk>', EventDetailView.as_view()),

]

