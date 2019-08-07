from django import forms
from django.contrib.admin import widgets 

class PostForm(forms.Form):
    title = forms.CharField(label = "title:" ,max_length = 100)
    content = forms.CharField(label = "write your post:" ,max_length = 500)
    pub_date = forms.SplitDateTimeField(widget=widgets.AdminSplitDateTime)
    # pub_date = forms.TimeField(widget=widgets.AdminTimeWidget)
    author = forms.CharField(label = "author:" ,max_length = 24)
    
