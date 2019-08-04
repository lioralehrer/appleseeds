from django.shortcuts import render
from django.http import HttpResponse

colors=[{1:"red",2:"yellow",3:"blue",4:"brown",5:"pink",6:"green"}]

def index(request):
    return render(request, 'colors/index.html')

def colors_list(request):
    context = {"colors": get_colors()}
    return HttpResponse(f"<h1>Colors List:</h1> {colors}")

def add_color(request, color):
    if color in colors:
        return HttpResponse(f"{color} already exsist in system")
    else:
        colors.append(color)
        return HttpResponse({"msg":f"{color} succesfully inserted into colors."},status=201)  

def get_color(request):
    color = request.Get.get('name','color')
    return HttpResponse(color)

def get_colors():
    pass