from django.db import models

# Create your models here.
class MenuItem(models.Model):
    title=models.CharField(max_length=40)
    url=models.CharField(max_length=100)
    
    def __str__(self):
        return self.title
