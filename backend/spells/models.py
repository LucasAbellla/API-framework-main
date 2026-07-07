from django.db import models


class Spell(models.Model):

    class Category(models.TextChoices):
        ACTIVE = "Ativa", "Ativa"
        PASSIVE = "Passiva", "Passiva"
        ULTIMATE = "Suprema", "Suprema"

    class Type(models.TextChoices):
        FLAMA = "Flama", "Flama"
        AQUA = "Aqua", "Aqua"
        TERRAE = "Terrae", "Terrae"
        EOL = "Eol", "Eol"
        CRELIX = "Crelix", "Crelix"
        FULMEN = "Fulmen", "Fulmen"
        LUX = "Lux", "Lux"
        UMBRA = "Umbra", "Umbra"
        VITA = "Vita", "Vita"
        TOXI = "Toxi", "Toxi"
        VIS = "Vis", "Vis"

    name = models.CharField(
        max_length=100,
        unique=True,
        verbose_name="Nome"
    )

    category = models.CharField(
        max_length=20,
        choices=Category.choices,
        verbose_name="Categoria"
    )

    spell_type = models.CharField(
        max_length=20,
        choices=Type.choices,
        verbose_name="Tipagem"
    )

    function = models.CharField(
        max_length=100,
        verbose_name="Função"
    )

    description = models.TextField(
        verbose_name="Descrição"
    )

    image = models.ImageField(
        upload_to="spells/",
        blank=True,
        null=True,
        verbose_name="Imagem"
    )

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Magia"
        verbose_name_plural = "Magias"
        ordering = ["name"]

    def __str__(self):
        return self.name