from django.contrib import admin
from django.utils.html import format_html

from .models import Character


@admin.register(Character)
class CharacterAdmin(admin.ModelAdmin):

    # -----------------------------
    # Lista de Personagens
    # -----------------------------
    list_display = (
        "image_preview",
        "name",
        "race",
        "character_type",
        "kingdom",
        "weapon",
        "faction",
    )

    search_fields = (
        "name",
        "title",
        "race__name",
        "kingdom__name",
        "faction__name",
        "weapon__name",
    )

    list_filter = (
        "kingdom",
        "race",
        "character_type",
        "weapon",
        "gender",
        "faction",
    )

    ordering = (
        "name",
    )

    filter_horizontal = (
        "spells",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
        "image_preview",
    )

    # -----------------------------
    # Organização do formulário
    # -----------------------------
    fieldsets = (

        ("📋 Informações Básicas", {
            "fields": (
                ("name", "title"),
                ("age", "gender"),
                "height",
            )
        }),

        ("🌍 Origem", {
            "fields": (
                ("race", "kingdom"),
                "faction",
            )
        }),

        ("⚔ Combate", {
            "fields": (
                "character_type",
                "weapon",
                "spells",
            )
        }),

        ("📖 História", {
            "classes": ("collapse",),
            "fields": (
                "personality",
                "history",
            )
        }),

        ("🖼 Imagem", {
            "fields": (
                "image",
                "image_preview",
            )
        }),

        ("⚙ Sistema", {
            "classes": ("collapse",),
            "fields": (
                "created_at",
                "updated_at",
            )
        }),
    )

    # -----------------------------
    # Miniatura da imagem
    # -----------------------------
    @admin.display(description="Imagem")
    def image_preview(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" style="height:70px; border-radius:8px;" />',
                obj.image.url
            )

        return "Sem imagem"