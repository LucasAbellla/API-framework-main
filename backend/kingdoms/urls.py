from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import KingdomViewSet

router = DefaultRouter()
router.register(r'', KingdomViewSet)

urlpatterns = [
    path('', include(router.urls)),
]