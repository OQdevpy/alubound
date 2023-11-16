from django.urls import path
from .views import *

urlpatterns = [
    path('galareya/', GalareyaListView.as_view(), name='galareya'),
    path('new/', NewListView.as_view(), name='new'),
    path('about/', AboutListView.as_view(), name='about'),
    path('category/', CategoryListView.as_view(), name='category'),
    path('product/', ProductListView.as_view(), name='product'),
    path('partner/', PartnerListView.as_view(), name='partner'),
    
    
]
