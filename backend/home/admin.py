from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from .models import *

class GalareyaAdmin(TranslationAdmin):
    list_display = ['title', 'image']
    search_fields = ['title', ]

class NewAdmin(TranslationAdmin):
    list_display = ['title', 'description', 'image', 'date']
    search_fields = ['title', ]

class AboutAdmin(TranslationAdmin):
    list_display = ['title', 'description', 'image']
    search_fields = ['title', ]

class CategoryAdmin(TranslationAdmin):
    list_display = ['name', 'image']
    search_fields = ['name', ]

class ProductAdmin(TranslationAdmin):
    list_display = ['title', 'description', 'image', 'price', 'category', 'date']
    search_fields = ['title', ]

class PartnerAdmin(admin.ModelAdmin):
    list_display = ['image']
    search_fields = ['image', ]

admin.site.register(Partner, PartnerAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(About, AboutAdmin)
admin.site.register(New, NewAdmin)
admin.site.register(Galareya, GalareyaAdmin)
