from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("characters", "0004_alter_character_race_fk"),
    ]

    operations = [
        # Remove o campo antigo (CharField)
        migrations.RemoveField(
            model_name="character",
            name="race",
        ),

        # Renomeia race_fk para race
        migrations.RenameField(
            model_name="character",
            old_name="race_fk",
            new_name="race",
        ),
    ]