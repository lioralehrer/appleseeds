from django.conf.urls import url
from django.contrib.auth.views import login, logout
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^login/$', login, name='login'),
    url(r'^logout/$', logout,kwargs={'next_page': '/'}, name='logout'),
    url(r'^register/$', views.register, name='register'),

]
