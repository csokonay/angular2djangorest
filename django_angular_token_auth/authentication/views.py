from django.shortcuts import render

from django.contrib.auth.models import User

from rest_framework import generics

from authentication.serializers import UserSerializer

from rest_framework.response import Response

class UserListAPIView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = UserSerializer(queryset, many=True)
        for q in serializer.data:
            print str(q)
        return Response(serializer.data)