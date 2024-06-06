from django.db import models

# Simple Problem models
class Problem(models.Model):
    name = models.CharField(max_length = 100)
    url = models.CharField(max_length = 100)
   
    # This is the string representation of the model
    def __str__(self):
        return self.name
