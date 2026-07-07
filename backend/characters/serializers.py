from rest_framework import serializers

from .models import Character


class CharacterSerializer(serializers.ModelSerializer):

    race = serializers.StringRelatedField()

    kingdom = serializers.StringRelatedField()

    faction = serializers.StringRelatedField()

    weapon = serializers.StringRelatedField()

    spells = serializers.StringRelatedField(many=True)

    class Meta:
        model = Character
        fields = "__all__"