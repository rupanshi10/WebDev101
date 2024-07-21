# Create your models here.
from django.contrib.auth.models import AbstractUser, Group
from django.db import models

class CustomUser(AbstractUser):
    is_moderator = models.BooleanField(default=False)
    roles = models.ManyToManyField(Group, blank=True)
