from rest_framework import viewsets

from .models import Character
from .serializers import CharacterSerializer


class CharacterViewSet(viewsets.ModelViewSet):

    queryset = Character.objects.select_related(
        "race",
        "kingdom",
        "faction",
        "weapon",
    ).prefetch_related(
        "spells"
    )

    serializer_class = CharacterSerializer