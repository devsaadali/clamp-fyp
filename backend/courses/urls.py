from django.urls import path
from .views import get_courses, create_courses

urlpatterns = [
    path('', get_courses, name='get_courses'),
    path('create/', create_courses, name='create_courses')
]