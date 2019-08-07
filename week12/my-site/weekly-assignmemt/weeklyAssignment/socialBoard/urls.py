from django.conf.urls import url
from django.contrib.auth.views import login, logout
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^login/$', login, name='login'),
    url(r'^logout/$', logout,kwargs={'next_page': '/'}, name='logout'),
    url(r'^register/$', views.register, name='register'),
    url(r'^post/',views.new_post_form, name='new_post' ),
     url(r'^newpost/$', views.new_post_form, name='new_post_form')
]
