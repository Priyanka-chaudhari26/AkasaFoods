from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


# Create your models here.

class Category(models.Model):
    categoryname = models.CharField(max_length=100)
    def __str__(self):
        return self.categoryname


class Product(models.Model):
    productname = models.CharField(max_length=150)
    image =models.ImageField(null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    stock = models.IntegerField()
    pdesc = models.CharField(max_length=1000,null=True, blank=True)
    rating = models.DecimalField(max_digits=5, decimal_places=2,null=True, blank=True)
    createdAt = models.DateTimeField(default=timezone.now)
    # _id = models.AutoField(primary_key=True,editable=False)

    def __str__(self):
        return self.productname

class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class CartItem(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,null=True, blank=True)
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return f"{self.product.productname} ({self.quantity})"

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    order_date = models.DateTimeField(auto_now_add=True)
    order_status = models.CharField(max_length=100, default='Pending')

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    price_at_checkout = models.DecimalField(max_digits=6, decimal_places=2)

class OrderHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    status = models.CharField(max_length=100)







   
