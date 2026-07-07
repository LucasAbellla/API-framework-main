from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import RaceViewSet

router = DefaultRouter()

router.register("", RaceViewSet)

urlpatterns = [
    path("", include(router.urls)),
]