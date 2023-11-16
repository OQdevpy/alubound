from django.urls import path
from .views import *

urlpatterns = [
    path('galareya/', GalareyaListView.as_view(), name='galareya'),
    
]
