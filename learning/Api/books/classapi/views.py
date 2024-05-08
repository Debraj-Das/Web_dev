from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

books = [
        {
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
        },
        {
            "title": "The Bell Jar",
            "author": "Sylvia Plath",
        },
        {
            "title": "I Know Why the Caged Bird Sings",
            "author": "Maya Angelou",
        },
]


class BookList(APIView):
    def get(self, request):
       return Response(books) 
    
    def post(self, request):
        book = request.data
        books.append(book)
        return Response(book)


class BookDetail(APIView):
    def get(self, request, pk):
        if pk > len(books) or pk < 1:
            return Response('Invalid ID', status=status.HTTP_404_NOT_FOUND)

        book = books[pk-1]
        return Response(book)
    
    def put(self, request, pk):
        if pk > len(books) or pk < 1:
            return Response('Invalid ID', status=status.HTTP_404_NOT_FOUND)

        data = request.data
        books[pk-1] = data
        return Response(data)
    
    def delete(self, request, pk):
        if pk > len(books) or pk < 1:
            return Response('Invalid ID', status=status.HTTP_404_NOT_FOUND)

        books.pop(pk-1)
        return Response('Deleted')
