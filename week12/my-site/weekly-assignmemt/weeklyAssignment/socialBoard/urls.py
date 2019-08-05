from django.conf.urls import url
from django.contrib.auth.views import login, logout
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^login/$', login, name='login'),
    url(r'^logout/$', logout,kwargs={'next_page': '/'}, name='logout'),
    url(r'^register/$', views.register, name='register'),
     url(r'^post/', TemplateView.as_view(template_name='new_post.html'),
                      name='new_post'),
]
