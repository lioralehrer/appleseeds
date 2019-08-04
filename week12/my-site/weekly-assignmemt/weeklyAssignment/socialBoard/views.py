from django.shortcuts import render
from . models import Post
from django.http import HttpResponse
import datetime


def index(request):
    context = {"posts": get_posts()}
    return render(request,'socialBoard/index.html',context)

def get_posts():
    return Post.objects.all()