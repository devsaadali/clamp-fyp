from django.db import models

class Resource(models.Model):
    name = models.CharField(max_length=500)
    description = models.TextField()
    link = models.TextField()
    course_id = models.IntegerField()
    posted_by = models.IntegerField()
    resource_type = models.CharField(max_length=100)

    def __str__(self):
        return self.name

