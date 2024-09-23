from django.contrib import admin
from django.urls import path
from akasabackapp import views


urlpatterns = [
    path('', views.getRoutes, name="getRoutes"),
    path('products/', views.getProducts, name="getProducts"),
    path('category/', views.getCategory, name="getCategory"),
    path('cart/', views.getCart, name="getCart"),
    path('cartitem/', views.getCartItem, name="getCartItem"),
    path('order/', views.getOrder, name="getOrder"),
    path('orderitem/', views.getOrderItem, name="getOrderItem"),
    path('orderhistory/', views.getOrderHistory, name="getOrderHistory"),
    path('product/<str:pk>', views.getProduct, name="getProduct"),
    # path('register/', views.register, name='register'),
    # path('login/', views.login, name='login'),
    # path('logout/', views.logout, name='logout'),
    path('product/<str:pk>/add-to-cart/', views.add_to_cart, name='add-to-cart'),
    path('view-cart/', views.view_cart, name='view-cart'),

   
]