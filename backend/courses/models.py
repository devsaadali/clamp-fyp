from django.db import models

class Course(models.Model):
    name = models.CharField(max_length=500)
    description = models.TextField(blank=True, null=True)
    institute_id = models.IntegerField()

    def __str__(self):
        return self.name
