from django.contrib import admin
from .models import Conference, Article


@admin.register(Conference)
class ConferenceAdmin(admin.ModelAdmin):
    list_display = ("title", "start_date", "end_date",
                    "publisher", "created_at")
    list_filter = ("start_date", "publisher")
    search_fields = ("title", "publisher")
    prepopulated_fields = {"slug": ("title",)}
    ordering = ("-start_date",)

    fieldsets = (
        ("Conference Info", {
            "fields": ("title", "slug", "description", "publisher")
        }),
        ("Dates", {
            "fields": ("start_date", "end_date")
        }),
    )


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ("title", "conference", "published_date", "created_at")
    list_filter = ("conference", "published_date")
    search_fields = ("title", "authors", "keywords", "doi")
    prepopulated_fields = {"slug": ("title",)}
    ordering = ("-published_date",)

    fieldsets = (
        ("Article Info", {
            "fields": ("title", "slug", "conference", "authors")
        }),
        ("Content", {
            "fields": ("abstract", "keywords", "pdf")
        }),
        ("Publication Data", {
            "fields": ("published_date", "pages", "doi")
        }),
    )
