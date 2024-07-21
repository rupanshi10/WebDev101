from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Example view for the home page
    path('profile/', views.profile, name='profile'),  # URL pattern for the profile view
]
