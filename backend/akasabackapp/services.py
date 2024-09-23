from .models import Product
from .serializers import ProductSerializer
from rest_framework.response import Response


def getProductByName(request):
    data = request.data
    name = data.get('name', '')
    limit = data.get('limit',10)
    offset = data.get('offset', 0)
    kwargs= {}   
    if name:
        kwargs.update({'productname__icontains':name})
    # products = Product.objects.filter(**kwargs).order_by('-id')[offset:offset+limit]
    # return products, len(products)    
    # 
    products = Product.objects.filter(**kwargs)[offset:offset+limit]
    serializer = ProductSerializer(products,many=True)
    # return products, len(products)  
    return Response(serializer.data)
                                        