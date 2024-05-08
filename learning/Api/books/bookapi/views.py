from bookapi.models import book
from bookapi.serializers import bookSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
# Create your views here.

@api_view(['GET'])
def getBookList(request):
    books = book.objects.all()  # this is a complex 
    booksJson = bookSerializer(books, many = True) # bookSerializer convert the complex data into json
    return Response(booksJson.data) # Response is a class that is used to return the data in json format 

@api_view(['POST'])
def addBook(request):
    bookData = request.data
    print(bookData)
    newBook = bookSerializer(data = bookData)
    print(newBook)
    if newBook.is_valid():
        newBook.save()
        return Response(newBook.data)
    else:
        return Response(newBook.errors)
