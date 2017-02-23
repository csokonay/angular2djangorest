from django.contrib.auth.models import User
from rest_framework import generics
from authentication.serializers import UserSerializer
from rest_framework.response import Response

from rest_framework import permissions
from .permissions import ServicePermission
from .serializers import JSONWebTokenSerializerCustomer, JSONWebTokenSerializerService
from rest_framework_jwt.views import JSONWebTokenAPIView

class ObtainJSONWebTokenCustomer(JSONWebTokenAPIView):
    """
    API View that receives a POST with a user's username and password.

    Returns a JSON Web Token that can be used for authenticated requests.
    """
    serializer_class = JSONWebTokenSerializerCustomer

class ObtainJSONWebTokenService(JSONWebTokenAPIView):
    """
    API View that receives a POST with a user's username and password.

    Returns a JSON Web Token that can be used for authenticated requests.
    """
    serializer_class = JSONWebTokenSerializerService

class UserListAPIView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, ServicePermission, )
    #permission_classes = (ServicePermission,)
    
    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = UserSerializer(queryset, many=True)
        
        return Response(serializer.data)


obtain_jwt_token_customer = ObtainJSONWebTokenCustomer.as_view()
obtain_jwt_token_service  = ObtainJSONWebTokenService.as_view()