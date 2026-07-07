from django.contrib import admin

from .models import Kingdom


@admin.register(Kingdom)
class KingdomAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "title",
        "capital",
        "ruler",
        "color",
        "created_at",
    )

    search_fields = (
        "name",
        "title",
        "capital",
        "ruler",
    )

    list_filter = (
        "created_at",
    )

    ordering = (
        "name",
    )