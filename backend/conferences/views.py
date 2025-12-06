from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Conference, Article
from .serializers import ConferenceSerializer, ArticleSerializer


class ConferenceListView(ListAPIView):
    queryset = Conference.objects.all()
    serializer_class = ConferenceSerializer


class ConferenceDetailView(RetrieveAPIView):
    queryset = Conference.objects.all()
    lookup_field = "slug"
    serializer_class = ConferenceSerializer


class ArticleDetailView(RetrieveAPIView):
    queryset = Article.objects.all()
    lookup_field = "slug"
    serializer_class = ArticleSerializer
