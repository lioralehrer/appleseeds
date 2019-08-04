from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$',views.index,name='index'),
    url(r'^list$',views.colors_list,name='colors_list'),
    url(r'^add$',views.add_color, name='add_color'),
    url(r'^get$',views.get_color, name='get_color'),
]