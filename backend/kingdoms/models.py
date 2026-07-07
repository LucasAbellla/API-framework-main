from django.db import models


class Kingdom(models.Model):
    name = models.CharField(
        max_length=100,
        unique=True,
        verbose_name="Nome"
    )

    capital = models.CharField(
        max_length=100,
        verbose_name="Capital"
    )

    ruler = models.CharField(
        max_length=100,
        verbose_name="Governante"
    )

    description = models.TextField(
        verbose_name="Descrição"
    )

    image = models.ImageField(
        upload_to="kingdoms/",
        blank=True,
        null=True,
        verbose_name="Imagem"
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="Criado em"
    )

    updated_at = models.DateTimeField(
        auto_now=True,
        verbose_name="Atualizado em"
    )

    class Meta:
        verbose_name = "Reino"
        verbose_name_plural = "Reinos"
        ordering = ["name"]

    def __str__(self):
        return self.name