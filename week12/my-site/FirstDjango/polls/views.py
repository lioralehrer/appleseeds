# from django.shortcuts import render
from django.http import HttpResponse
import random


def index(request):
    number = random.randint(1,100)
    return HttpResponse(f"<h1>Hello, world. You're at the polls index.</h1><h2>your number for today is:{number} </h2>")
