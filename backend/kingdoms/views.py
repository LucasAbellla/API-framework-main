from rest_framework import viewsets
from .models import Kingdom
from .serializers import KingdomSerializer


class KingdomViewSet(viewsets.ModelViewSet):
    queryset = Kingdom.objects.all()
    serializer_class = KingdomSerializer