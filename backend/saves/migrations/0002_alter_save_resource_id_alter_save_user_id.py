# Generated by Django 5.1.2 on 2024-12-09 12:14

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resources', '0004_alter_resource_course_id_alter_resource_posted_by'),
        ('saves', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterField(
            model_name='save',
            name='resource_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='resources.resource'),
        ),
        migrations.AlterField(
            model_name='save',
            name='user_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
