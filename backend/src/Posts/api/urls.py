from django.urls import path

from Posts.api.views import ArticleViewSet, EventViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'articles', ArticleViewSet, basename='articles')
router.register(r'events', EventViewSet, basename='events')
urlpatterns = router.urls


# from .views import ArticleListView, ArticleDetailView, EventListView, EventDetailView, ArticleCreateView, EventCreateView 
# from .views import ArticleUpdateView, EventUpdateView, ArticleDeleteView, EventDeleteView

# urlpatterns = [
#     path('articles', ArticleListView.as_view()),
#     path('articles/ create', ArticleCreateView.as_view()),
#     path('articles/<pk>', ArticleDetailView.as_view()),
#     path('articles/<pk>/update', ArticleUpdateView.as_view()),
#     path('articles/<pk>/delete', ArticleDeleteView.as_view()),
#     path('events', EventListView.as_view()),
#     path('events/<pk>', EventDetailView.as_view()),
#     path('events/<pk>/update', EventUpdateView.as_view()),
#     path('events/<pk>/delete', EventDeleteView.as_view()),


# ]

