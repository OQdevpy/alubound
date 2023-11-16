from django.db import models
# import ckeditor
from ckeditor.fields import RichTextField


# Create your models here.
class Partner(models.Model):
    image = models.ImageField(upload_to='images/')

class Galareya(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.title
    
class New(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/')
    description = RichTextField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class About(models.Model):
    title = models.CharField(max_length=100)
    description = RichTextField()
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.title


class Category(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.name
    
class Product(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/')
    description = RichTextField()
    price = models.IntegerField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    