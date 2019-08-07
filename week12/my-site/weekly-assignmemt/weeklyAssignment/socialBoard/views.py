from django.shortcuts import render, redirect
from . models import Post
from django.http import HttpResponse
from datetime import datetime
from django.contrib.auth import authenticate, login as auth_login, logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_protect
from .forms import PostForm
def index(request):
    context = {"posts": get_posts()}
    return render(request,'socialBoard/index.html',context)

def get_posts():
    return Post.objects.all()
 
   
# @login_required
# def some_view(request):
#     pass

def login(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = authenticate(username=username, password=password)
    if user is not None:
        if user.is_active:
            auth_login(request,user)
            return redirect(request, 'index.html')
        else:
            pass
    else:        
        pass


def register(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            new_user = form.save()
            auth_login(request,new_user)
            posts = Post.objects.all()
            context = {'posts': posts}
            return render(request, "socialBoard/index.html", context)
            
    else:
        form = UserCreationForm()
    return render(request, "registration/register.html", {"form": form})


      


def logout(request):
    logout(request)
    return redirect('base.html')


@csrf_protect
def new_post_form(request):
    if request.method =="POST":
        form = PostForm(request.POST)
        if form.is_valid():
            Post.objects.create(**form.cleaned_data)
            return HttpResponse("<h1>New Post created</h1>")
    else:
        form = PostForm()
    context = {"form":form}
    return render(request, "new_post.html", context)    




