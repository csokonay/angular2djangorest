from django.contrib.auth.models import User
from rest_framework import generics
from authentication.serializers import UserSerializer
from rest_framework.response import Response

from rest_framework import permissions
from .permissions import ServicePermission

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


