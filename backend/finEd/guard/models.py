from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class UserDetails(models.Model):
    userId = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_details')
    age = models.IntegerField()
    occupation = models.CharField(max_length=100)
    def __str__(self):
        return self.age