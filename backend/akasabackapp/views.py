from django.shortcuts import render
from rest_framework import status
# from django.http import JsonResponse   
from rest_framework.response import Response
from rest_framework.decorators import api_view
# from .products import products
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Category,Product,Cart,CartItem,Order,OrderItem,OrderHistory
from .serializers import ProductSerializer
# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    return Response("Hello, world!")

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)

    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request,pk):
    product=Product.objects.get(id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getCategory(request):
    category = Category.objects.all()
    return Response(category)

@api_view(['GET'])
def getCart(request):
    cart = Cart.objects.all()
    return Response(cart)

@api_view(['GET'])
def getCartItem(request):
    cartitem = CartItem.objects.all()
    return Response(cartitem)

@api_view(['GET'])
def getOrder(request):
    order = Order.objects.all()
    return Response(order)

@api_view(['GET'])
def getOrderItem(request):
    orderitem = OrderItem.objects.all()
    return Response(orderitem)

@api_view(['GET'])
def getOrderHistory(request):
    orderhistory = OrderHistory.objects.all()
    return Response(orderhistory)

# @api_view(['POST'])
# def register(request):
#     serializer = RegisterSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#  @api_view(['POST'])
# def login(request):
#     serializer = LoginSerializer(data=request.data)
#     if serializer.is_valid():
#         email = serializer.validated_data['email']
#         password = serializer.validated_data['password']
#         user = authenticate(username=email, password=password)
#         if user:
#             refresh = RefreshToken.for_user(user)
#             return Response({
#                 'refresh': str(refresh),
#                 'access': str(refresh.access_token),
#                 'user': UserSerializer(user).data
#             }, status=status.HTTP_200_OK)
#         return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['POST'])
# def logout(request):
#     try:
#         token = request.data['refresh_token']
#         token = RefreshToken(token)
#         token.blacklist()
#         return Response({'message': 'Logout successful'}, status=status.HTTP_200_OK)
#     except Exception as e:
#         return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)
@api_view(['POST'])
def add_to_cart(request,pk):
    # user = request.user
    
    # quantity = request.data.get('quantity', 1)
    product = Product.objects.get(id=pk)
    
    # cart_item, created = CartItem.objects.get_or_create(user=user, product=product)
    cart_item, created = CartItem.objects.get_or_create( product=product)
    # cart_item.quantity += int(quantity)
    cart_item.save()

    # return Response({'message': 'Product added to cart', 'cart_item': cart_item.quantity})
    return Response({'message': 'Product added to cart', 'cart_item': product})

@api_view(['GET'])
def view_cart(request):
    user = request.user
    cart_items = CartItem.objects.filter(user=user)
    cart_data = [{
        'product': item.product.productname,
        'quantity': item.quantity,
        'price': item.product.price,
        'total': item.product.price * item.quantity,
    } for item in cart_items]

    return Response(cart_data)
