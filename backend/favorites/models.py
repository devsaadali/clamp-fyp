from django.db import models

class Favorite(models.Model):
    user_id = models.IntegerField()
    course_id = models.IntegerField()

    def __str__(self):
        return self.name

