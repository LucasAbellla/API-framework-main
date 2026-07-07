from rest_framework import serializers

from .models import Character

from races.serializers import RaceSerializer
from kingdoms.serializers import KingdomSerializer
from factions.serializers import FactionSerializer
from weapons.serializers import WeaponSerializer
from spells.serializers import SpellSerializer

class CharacterSerializer(serializers.ModelSerializer):

    race = RaceSerializer(read_only=True)
    kingdom = KingdomSerializer(read_only=True)
    faction = FactionSerializer(read_only=True)
    weapon = WeaponSerializer(read_only=True)
    spells = SpellSerializer(many=True, read_only=True)

    class Meta:
        model = Character
        fields = "__all__"