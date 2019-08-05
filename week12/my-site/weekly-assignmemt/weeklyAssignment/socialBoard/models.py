from django.db import models
import datetime
from django.utils import timezone
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=120)
    pub_date = models.DateTimeField('date published')
    content = models.CharField(max_length=500)
    author = models.CharField(max_length = 24)

    def __str__(self):
        return self.title +"\n " +self.content+ "\n by: "+self.author 

# user = User.objects.create_user(
#     username = 'john',
#     email = 'johni@gmail.com',
#     password='john123'
# )
# user.save()
