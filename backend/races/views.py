from rest_framework import viewsets

from .models import Race
from .serializers import RaceSerializer


class RaceViewSet(viewsets.ModelViewSet):

    queryset = Race.objects.all()

    serializer_class = RaceSerializer