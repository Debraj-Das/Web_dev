from django.db import models

# Simple Book models
class book(models.Model):
    title = models.CharField(max_length = 100)
    number_of_pages = models.IntegerField()
    pulished_date = models.DateField()
    quantity = models.IntegerField()

    def __str__(self):
        return self.title

