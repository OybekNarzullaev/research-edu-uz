from django.urls import path
from .views import ConferenceListView, ConferenceDetailView, ArticleDetailView

urlpatterns = [
    path("", ConferenceListView.as_view()),
    path("<slug:slug>/", ConferenceDetailView.as_view()),
    path("article/<slug:slug>/", ArticleDetailView.as_view()),
]
