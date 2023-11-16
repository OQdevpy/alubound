from django.shortcuts import render

from home.serializers import *
from .models import *
from rest_framework.mixins import ListModelMixin,RetrieveModelMixin
from rest_framework.viewsets import GenericViewSet
# Create your views here.

class GalareyaListView(ListModelMixin,RetrieveModelMixin,GenericViewSet):
    queryset = Galareya.objects.all()
    serializer_class = GalareyaSerializer

class NewListView(ListModelMixin,RetrieveModelMixin,GenericViewSet):
    queryset = New.objects.all()
    serializer_class = NewSerializer

class AboutListView(ListModelMixin,RetrieveModelMixin,GenericViewSet):
    queryset = About.objects.all()
    serializer_class = AboutSerializer

class CategoryListView(ListModelMixin,RetrieveModelMixin,GenericViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProductListView(ListModelMixin,RetrieveModelMixin,GenericViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class PartnerListView(ListModelMixin,RetrieveModelMixin,GenericViewSet):
    queryset = Partner.objects.all()
    serializer_class = PartnerSerializer