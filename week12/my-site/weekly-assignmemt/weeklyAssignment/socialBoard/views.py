from django.shortcuts import render, redirect
from . models import Post
from django.http import HttpResponse
import datetime
from django.contrib.auth import authenticate, login , logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
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
            login(request,user)
            return redirect(request, 'socialBoard.html')
        else:
            pass
    else:        
        pass

def register(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            new_user = form.save()
            login(request,new_user)
            return HttpResponseRedirect(reverse("socialBoard"))
        else:
            form = UserCreationForm()
            return render(request,
            "registration/register.html",
            { "form": form })


      


def logout(request):
    logout(request)
    return redirect(request.META.get('HTTP_REFERER'))