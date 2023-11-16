from django.shortcuts import render

from home.serializers import *
from .models import *
from rest_framework.generics import ListAPIView,RetrieveAPIView
# Create your views here.

class GalareyaListView(ListAPIView,RetrieveAPIView):
    queryset = Galareya.objects.all()
    serializer_class = GalareyaSerializer

class NewListView(ListAPIView,RetrieveAPIView):
    queryset = New.objects.all()
    serializer_class = NewSerializer

class AboutListView(ListAPIView,RetrieveAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer

class CategoryListView(ListAPIView,RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProductListView(ListAPIView,RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class PartnerListView(ListAPIView,RetrieveAPIView):
    queryset = Partner.objects.all()
    serializer_class = PartnerSerializer