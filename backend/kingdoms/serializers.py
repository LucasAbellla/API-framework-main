from rest_framework import serializers
from .models import Kingdom


class KingdomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kingdom
        fields = ["id", "name"]