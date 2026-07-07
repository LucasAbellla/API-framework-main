from django.db import models
from kingdoms.models import Kingdom


class Faction(models.Model):
    name = models.CharField(
        max_length=100,
        unique=True,
        verbose_name="Nome"
    )

    kingdom = models.ForeignKey(
        Kingdom,
        on_delete=models.CASCADE,
        related_name="factions",
        verbose_name="Reino"
    )

    leader = models.CharField(
        max_length=100,
        verbose_name="Líder"
    )

    description = models.TextField(
        verbose_name="Descrição"
    )

    image = models.ImageField(
        upload_to="factions/",
        blank=True,
        null=True,
        verbose_name="Imagem"
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Facção"
        verbose_name_plural = "Facções"
        ordering = ["name"]

    def __str__(self):
        return self.name