from django.contrib import admin

# Register your models here.

from .models import Category,Product,Cart,CartItem,Order,OrderItem,OrderHistory


admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Cart)
admin.site.register(CartItem)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(OrderHistory)

