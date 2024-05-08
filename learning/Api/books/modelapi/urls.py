from django.urls import path
from modelapi.views import ProblemList, ProblemDetail

urlpatterns = [
    path('', ProblemList.as_view(), name='problem_list'),
    path('<int:pk>/', ProblemDetail.as_view(), name='problem_detail'),
]

