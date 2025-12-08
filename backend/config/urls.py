from django.contrib import admin
from django.urls import path, include, re_path
from django.views.static import serve
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/conferences/', include('conferences.urls')),
]

# Production security + PDF serve
urlpatterns += [
    re_path(
        r'^files/(?P<path>[\w./-]+)$',
        serve,
        {'document_root': settings.MEDIA_ROOT, 'show_indexes': False}
    ),
]
