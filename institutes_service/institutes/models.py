from django.db import models

class Institute(models.Model):
    name = models.CharField(max_length=500)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name