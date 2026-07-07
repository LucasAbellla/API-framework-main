from rest_framework import serializers

from .models import Race
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


class RaceSerializer(serializers.ModelSerializer):

    characters = serializers.SerializerMethodField()

    class Meta:
        model = Race
        fields = [
            "id",
            "name",
            "description",
            "image",
            "characters",
        ]

    def get_characters(self, obj):

        characters = Character.objects.filter(race=obj)

        return CharacterMiniSerializer(
            characters,
            many=True
        ).data