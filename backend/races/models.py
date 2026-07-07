from django.db import models


class Race(models.Model):

    name = models.CharField(
        max_length=100,
        unique=True,
        verbose_name="Nome"
    )

    description = models.TextField(
        verbose_name="Descrição"
    )

    image = models.ImageField(
        upload_to="races/",
        blank=True,
        null=True,
        verbose_name="Imagem"
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    class Meta:
        verbose_name = "Raça"
        verbose_name_plural = "Raças"
        ordering = ["name"]

    def __str__(self):
        return self.name