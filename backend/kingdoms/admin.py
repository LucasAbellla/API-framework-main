from django.contrib import admin
from .models import Kingdom


@admin.register(Kingdom)
class KingdomAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "capital",
        "ruler",
        "created_at",
    )

    search_fields = (
        "name",
        "capital",
        "ruler",
    )

    ordering = (
        "name",
    )