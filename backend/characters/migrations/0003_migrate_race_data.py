from django.db import migrations


from django.db import migrations


def migrate_races(apps, schema_editor):
    Character = apps.get_model("characters", "Character")
    Race = apps.get_model("races", "Race")

    for character in Character.objects.all():

        if not character.race:
            continue

        race_name = character.race.strip()

        race, created = Race.objects.get_or_create(
            name=race_name,
            defaults={
                "description": f"Raça {race_name}"
            }
        )

        character.race_fk = race
        character.save(update_fields=["race_fk"])


def reverse_migration(apps, schema_editor):
    Character = apps.get_model("characters", "Character")

    for character in Character.objects.all():
        character.race_fk = None
        character.save(update_fields=["race_fk"])


class Migration(migrations.Migration):

    dependencies = [
        ("races", "0001_initial"),
        ("characters", "0002_character_race_fk"),
    ]

    operations = [
        migrations.RunPython(
            migrate_races,
            reverse_migration,
        ),
    ]


def reverse_migration(apps, schema_editor):
    Character = apps.get_model("characters", "Character")

    for character in Character.objects.all():
        character.race_fk = None
        character.save(update_fields=["race_fk"])


class Migration(migrations.Migration):

    dependencies = [
        ("races", "0001_initial"),
        ("characters", "0002_character_race_fk"),  # ajuste este nome se necessário
    ]

    operations = [
        migrations.RunPython(
            migrate_races,
            reverse_migration
        )
    ]