"""SGK URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from . import views
urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$',views.mainpage),
    url(r'^log$',views.log),
    url(r'^search_done$',views.search),
    url(r'^statistic$',views.statistic),
    url(r'^date_info$',views.date_info),
    url(r'^server_status$',views.server_status),
    url(r'^logout/$',views.log_out),
    url(r'^cccc/$',views.cccc),
#    url(r'^testTemplate/$',views.template),
#    url(r'^newform$',views.newform)
]
