from django.db import models
from django.contrib.auth.models import User

class search_count(models.Model):
    user=models.ForeignKey(User,related_name="search_user")
    date=models.DateField(auto_now=True)
    content=models.CharField(max_length=200)

# Create your models here.
