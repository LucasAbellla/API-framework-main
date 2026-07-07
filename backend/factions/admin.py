from django.contrib import admin
from .models import Faction


@admin.register(Faction)
class FactionAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "kingdom",
        "leader",
    )

    search_fields = (
        "name",
        "leader",
    )

    list_filter = (
        "kingdom",
    )