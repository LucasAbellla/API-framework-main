from django.contrib import admin
from .models import Weapon


@admin.register(Weapon)
class WeaponAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "weapon_type",
        "rarity",
        "created_at",
    )

    search_fields = (
        "name",
    )

    list_filter = (
        "weapon_type",
        "rarity",
    )

    ordering = (
        "name",
    )