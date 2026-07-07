from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import FactionViewSet

router = DefaultRouter()
router.register("", FactionViewSet)

urlpatterns = [
    path("", include(router.urls)),
]