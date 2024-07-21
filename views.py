
from django.shortcuts import render, redirect
from django.contrib.auth import login, logout
from django.contrib.auth.forms import AuthenticationForm
from .forms import SignUpForm, UserLoginForm  # Adjust imports here
def profile(request):
    # Your profile view logic goes here
    return render(request, 'profile.html')  # Assuming you have a template named profile.html

def edit_profile_view(request):
    # Add logic to handle editing the user profile
    # This function should render a form to edit user profile details
    return render(request, 'edit_profile.html') 

def home(request):
    return render(request, 'home.html')  # Assuming you have a template named home.html

def register(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')  # Redirect to login page after successful registration
    else:
        form = SignUpForm()
    return render(request, 'registration/register.html', {'form': form})

def user_login(request):
    if request.method == 'POST':
        form = UserLoginForm(request=request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('home')  # Redirect to home page after successful login
    else:
        form = UserLoginForm()
    return render(request, 'registration/login.html', {'form': form})

def user_logout(request):
    logout(request)
    return redirect('login')
