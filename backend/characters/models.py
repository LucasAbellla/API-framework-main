from django.db import models

from kingdoms.models import Kingdom
from factions.models import Faction
from weapons.models import Weapon
from spells.models import Spell
from races.models import Race

class Character(models.Model):

    class Gender(models.TextChoices):
        MALE = "Masculino", "Masculino"
        FEMALE = "Feminino", "Feminino"
        OTHER = "Outro", "Outro"

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
        INZURVITUS = "Inzurvitus", "Inzurvitus"

    name = models.CharField(
        max_length=100,
        unique=True,
        verbose_name="Nome"
    )

    title = models.CharField(
        max_length=150,
        blank=True,
        verbose_name="Título"
    )

    age = models.PositiveIntegerField(
        verbose_name="Idade"
    )

    gender = models.CharField(
        max_length=20,
        choices=Gender.choices,
        verbose_name="Gênero"
    )

    race = models.ForeignKey(
        Race,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="characters",
        verbose_name="Raça"
    )

    height = models.DecimalField(
        max_digits=4,
        decimal_places=2,
        verbose_name="Altura"
    )

    character_type = models.CharField(
        max_length=20,
        choices=Type.choices,
        verbose_name="Tipagem"
    )

    kingdom = models.ForeignKey(
        Kingdom,
        on_delete=models.SET_NULL,
        null=True,
        related_name="characters",
        verbose_name="Reino"
    )

    faction = models.ForeignKey(
        Faction,
        on_delete=models.SET_NULL,
        null=True,
        related_name="characters",
        verbose_name="Facção"
    )

    weapon = models.ForeignKey(
        Weapon,
        on_delete=models.SET_NULL,
        null=True,
        related_name="characters",
        verbose_name="Arma Principal"
    )

    spells = models.ManyToManyField(
        Spell,
        blank=True,
        related_name="characters",
        verbose_name="Magias"
    )

    personality = models.TextField(
        blank=True,
        verbose_name="Personalidade"
    )

    history = models.TextField(
        blank=True,
        verbose_name="História"
    )

    image = models.ImageField(
        upload_to="characters/",
        blank=True,
        null=True,
        verbose_name="Imagem"
    )

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Personagem"
        verbose_name_plural = "Personagens"
        ordering = ["name"]

    def __str__(self):
        return self.name