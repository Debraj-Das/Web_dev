from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from modelapi.models import Problem
from modelapi.serializers import ProblemSerializer

class ProblemList(APIView):
    def get(self, request):
        problems = Problem.objects.all()
        serializer = ProblemSerializer(problems, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ProblemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProblemDetail(APIView):
    def get(self, request, pk):
        problem = Problem.objects.get(pk=pk)
        if problem is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ProblemSerializer(problem)
        return Response(serializer.data)

    def put(self, request, pk):
        problem = Problem.objects.get(pk=pk)
        if problem is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ProblemSerializer(problem, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        problem = Problem.objects.get(pk=pk)
        if problem is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        problem.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
