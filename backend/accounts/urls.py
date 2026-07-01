from django.urls import path

# Placeholder function for routes to avoid errors while avoiding business logic implementation.
def placeholder_view(request):
    pass

urlpatterns = [
    path('signup/', placeholder_view, name='signup'),
    path('login/', placeholder_view, name='login'),
    path('logout/', placeholder_view, name='logout'),
    path('refresh/', placeholder_view, name='refresh'),
    path('me/', placeholder_view, name='me'),
    path('forgot-password/', placeholder_view, name='forgot_password'),
    path('reset-password/', placeholder_view, name='reset_password'),
]
