from rest_framework.decorators import api_view
from django.http import JsonResponse
# Create your views here.

data = [
    {
        "name": 'alice and bod',
        "urls" : 'https//codeforces.com/aliceandbob'
    },
    {
        "name": 'codeforces',
        "urls" : 'https//codeforces.com'
    },
    {
        "name": 'codechef',
        "urls" : 'https//codechef.com'
    },
    {
        "name": 'geeksforgeeks',
        "urls" : 'https//geeksforgeeks.com'
    },
]

@api_view(['GET'])
def getData(request):
    query = request.GET.get('query')
    print(query)
    return JsonResponse(data, safe = False) # safe = False is used to return the data in json format

@api_view(['POST'])
def addData(request):
    if request.data == {}:
        return JsonResponse({'error': 'No data found'})

    find = request.data
    search = dict(find)
    print(search)

    return JsonResponse(data, safe = False)
