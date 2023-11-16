from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('galareya', GalareyaListView)
router.register('new', NewListView)
router.register('about', AboutListView)
router.register('category', CategoryListView)
router.register('product', ProductListView)
router.register('partner', PartnerListView)


urlpatterns = [
    
]

urlpatterns += router.urls


