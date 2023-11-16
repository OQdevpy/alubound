from django.shortcuts import render

from home.serializers import *
from .models import *
from rest_framework.generics import ListAPIView
# Create your views here.

class GalareyaListView(ListAPIView):
    queryset = Galareya.objects.all()
    serializer_class = GalareyaSerializer