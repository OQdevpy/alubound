from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from .models import *

class GalareyaAdmin(TranslationAdmin):
    list_display = ['title', 'image']
    search_fields = ['title', ]


admin.site.register(Galareya, GalareyaAdmin)
