from django.urls import path
from bookapi.views import getBookList, addBook 


urlpatterns = [
    path('',getBookList, name = 'Get All Books List'),
    path('add/', addBook, name = 'Add New Book'),
]
