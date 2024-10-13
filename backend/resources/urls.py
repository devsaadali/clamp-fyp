from django.urls import path
from .views import get_resources, create_resources

urlpatterns = [
    path('', get_resources, name="get_resources"),
    path('create/', create_resources, name='create_resources')
]