from django.db import models


class Weapon(models.Model):

    class WeaponType(models.TextChoices):
        SWORD = "Espada", "Espada"
        GREATSWORD = "Espadão", "Espadão"
        BOW = "Arco", "Arco"
        SPEAR = "Lança", "Lança"
        GAUNTLET = "Manopla", "Manopla"
        TOME = "Tomo", "Tomo"
        WAND = "Varinha", "Varinha"

    class Rarity(models.TextChoices):
        COMMON = "Comum", "Comum"
        UNCOMMON = "Incomum", "Incomum"
        RARE = "Rara", "Rara"
        LEGENDARY = "Lendária", "Lendária"
        MYTHIC = "Mítica", "Mítica"
        ILLUMINATED = "Iluminada", "Iluminada"

    name = models.CharField(
        max_length=100,
        unique=True,
        verbose_name="Nome"
    )

    weapon_type = models.CharField(
        max_length=20,
        choices=WeaponType.choices,
        verbose_name="Tipo"
    )

    rarity = models.CharField(
        max_length=20,
        choices=Rarity.choices,
        default=Rarity.COMMON,
        verbose_name="Raridade"
    )

    description = models.TextField(
        verbose_name="Descrição"
    )

    image = models.ImageField(
        upload_to="weapons/",
        blank=True,
        null=True,
        verbose_name="Imagem"
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Arma"
        verbose_name_plural = "Armas"
        ordering = ["name"]

    def __str__(self):
        return self.name