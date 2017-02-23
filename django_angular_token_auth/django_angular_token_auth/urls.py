"""django_angular_token_auth URL Configuration

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
    1. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import include, url
from django.contrib import admin

from authentication.views import UserListAPIView, obtain_jwt_token_customer, obtain_jwt_token_service

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'api/customerauth', obtain_jwt_token_customer),
    url(r'api/serviceauth', obtain_jwt_token_service),
    url(r'api/users', UserListAPIView.as_view()),

    #url(r'^.*$', TemplateView.as_view(template_name='index.html')),
]
