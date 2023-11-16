from modeltranslation.translator import register, TranslationOptions
from .models import *

@register(Galareya)
class GalareyaTranslationOptions(TranslationOptions):
    fields = ('title',)

@register(New)
class NewTranslationOptions(TranslationOptions):
    fields = ('title', 'description')

@register(About)
class AboutTranslationOptions(TranslationOptions):
    fields = ('title', 'description')

@register(Category)
class CategoryTranslationOptions(TranslationOptions):
    fields = ('name',)

@register(Product)
class ProductTranslationOptions(TranslationOptions):
    fields = ('title', 'description')