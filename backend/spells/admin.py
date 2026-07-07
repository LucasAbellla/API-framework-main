from django.contrib import admin
from .models import Spell


@admin.register(Spell)
class SpellAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "category",
        "spell_type",
        "function",
    )

    search_fields = (
        "name",
        "function",
    )

    list_filter = (
        "category",
        "spell_type",
    )

    ordering = (
        "name",
    )