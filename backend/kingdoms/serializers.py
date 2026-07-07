from rest_framework import serializers

from .models import Kingdom
from characters.models import Character


class KingdomCharacterSerializer(serializers.ModelSerializer):

    race = serializers.CharField(source="race.name")
    faction = serializers.CharField(source="faction.name")
    character_type = serializers.CharField()

    class Meta:

        model = Character

        fields = [

            "id",

            "name",

            "title",

            "image",

            "race",

            "faction",

            "character_type",

        ]


class KingdomSerializer(serializers.ModelSerializer):

    characters = KingdomCharacterSerializer(
        source="character_set",
        many=True,
        read_only=True
    )

    class Meta:

        model = Kingdom

        fields = [

            "id",

            "name",

            "title",

            "capital",

            "ruler",

            "description",

            "history",

            "image",

            "banner",

            "color",

            "characters",

            "created_at",

            "updated_at",

        ]