# Generated by Django 5.1.2 on 2024-11-27 17:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resources', '0002_alter_resource_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resource',
            name='posted_by',
            field=models.CharField(max_length=500),
        ),
    ]
