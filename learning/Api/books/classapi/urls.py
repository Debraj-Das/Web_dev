from django.urls import path
from classapi.views import BookList, BookDetail
urlpatterns = [
    path('', BookList.as_view(), name='book-list'),
    path('<int:pk>/', BookDetail.as_view(), name='book-detail'),
]
