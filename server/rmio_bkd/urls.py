"""
URL configuration for rmio_bkd project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import include, path

from . import root, views

urlpatterns = [
    path("", root.api_root),
    path("admin/", admin.site.urls),
    path("api-auth/", include("rest_framework.urls")),
    path("places/", views.PlacesView.as_view(), name="places"),
    path("place/", views.PlaceView.as_view(), name="place_detail"),
    path("events/", views.EventsView.as_view(), name="events"),
    path("guides/", views.LocalGuidesView.as_view(), name="guides"),
    path("contact/", views.contact_view, name="contact"),
]
