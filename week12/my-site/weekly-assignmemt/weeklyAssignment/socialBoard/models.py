from django.db import models

# 1. post title - max_length should be 120.
# 2. post publish_date - should be the post publish date.
# 3. post content - max_length should be 500.
# 4. post author - max_length should be 24.

class Post(models.Model):
    title = models.CharField(max_length=120)
    pub_date = models.DateTimeField('date published')
    content = models.CharField(max_length=500)
    author = models.CharField(max_length = 24)


