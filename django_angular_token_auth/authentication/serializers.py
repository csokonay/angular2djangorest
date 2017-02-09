from django.contrib.auth.models import User, Group
from rest_framework import serializers

class GroupSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Group
        fields = ('name',)

class UserSerializer(serializers.ModelSerializer):
    groups = GroupSerializer(many=True)
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'is_staff', 'groups',)
