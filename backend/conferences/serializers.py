from rest_framework import serializers
from .models import Conference, Article


class ConferenceShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conference
        fields = '__all__'


class ArticleSerializer(serializers.ModelSerializer):
    conference = ConferenceShortSerializer()

    class Meta:
        model = Article
        fields = "__all__"


class ConferenceSerializer(serializers.ModelSerializer):
    articles = ArticleSerializer(many=True, read_only=True)

    class Meta:
        model = Conference
        fields = "__all__"
