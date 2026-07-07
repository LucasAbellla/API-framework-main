from rest_framework import viewsets
from .models import Faction
from .serializers import FactionSerializer


class FactionViewSet(viewsets.ModelViewSet):
    queryset = Faction.objects.select_related("kingdom").all()
    serializer_class = FactionSerializer