from rest_framework import serializers

from .models import Faction
from characters.models import Character


class CharacterMiniSerializer(serializers.ModelSerializer):

    class Meta:
        model = Character
        fields = [
            "id",
            "name",
            "title",
            "image",
        ]


class FactionSerializer(serializers.ModelSerializer):

    kingdom = serializers.StringRelatedField()

    characters = serializers.SerializerMethodField()

    class Meta:
        model = Faction
        fields = [
            "id",
            "name",
            "kingdom",
            "leader",
            "description",
            "image",
            "characters",
        ]

    def get_characters(self, obj):

        characters = Character.objects.filter(faction=obj)

        return CharacterMiniSerializer(
            characters,
            many=True
        ).data