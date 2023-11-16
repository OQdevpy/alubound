from .models import *
from rest_framework import serializers

class GalareyaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Galareya
        fields = '__all__'

class NewSerializer(serializers.ModelSerializer):
    class Meta:
        model = New
        fields = '__all__'

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class PartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = '__all__'

    