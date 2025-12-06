from django.db import models
from slugify import slugify


class Conference(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, blank=True)
    description = models.TextField(blank=True)

    start_date = models.DateField()
    end_date = models.DateField()

    publisher = models.CharField(
        max_length=255, blank=True)   # e.g. "TATU", "IEEE"

    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


class Article(models.Model):
    conference = models.ForeignKey(
        Conference, on_delete=models.CASCADE, related_name="articles"
    )

    title = models.CharField(max_length=500)
    slug = models.SlugField(unique=True, blank=True)

    authors = models.CharField(max_length=1000)
    # Ko‘p muallif: "Oybek N., Alisher Q., John S."

    abstract = models.TextField()

    keywords = models.CharField(max_length=500, blank=True)
    # Scholar uchun yaxshi: "Artificial Intelligence, NLP, Document Analysis"

    pdf = models.FileField(upload_to="articles/")

    doi = models.CharField(max_length=255, blank=True, null=True)
    # Agar konferensiyada DOI berilmasa, bo‘sh qoldiriladi.

    published_date = models.DateField()

    pages = models.CharField(max_length=50, blank=True)
    # Masalan: "12–18"

    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
