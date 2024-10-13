from django.db import models

class Save(models.Model):
    user_id = models.IntegerField()
    resource_id = models.IntegerField()

    def __str__(self):
        return self.name

