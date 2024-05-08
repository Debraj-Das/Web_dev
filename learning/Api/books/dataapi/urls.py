from django.urls import path
from dataapi.views import getData, addData 


urlpatterns = [
    path('',getData, name = 'Get All data'),
    path('add/', addData, name = 'Add New data'),
]
