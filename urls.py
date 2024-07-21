"""
URL configuration for auth_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from authentication import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('django.contrib.auth.urls')),  # Built-in authentication views
    path('register/', views.register, name='register'),     # Register view for user registration
    path('login/', views.user_login, name='login'),          # Login view for user login
    path('', views.home, name='home'),    # Example home view
    path('profile/', views.profile, name='profile'),
     path('edit-profile/', views.edit_profile_view, name='edit_profile'),
]