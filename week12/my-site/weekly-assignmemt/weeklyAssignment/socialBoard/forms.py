from django import forms


class PostForm(forms.Form):
    title = forms.CharField(label = "title:" ,max_length = 100)
    content = forms.CharField(label = "write your post:" ,max_length = 500)
    # pub_date = forms.CharField(label = "date of publish:" ,max_length = 100)
    author = forms.CharField(label = "author:" ,max_length = 24)
    
