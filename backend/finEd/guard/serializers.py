
from django.contrib.auth.models import User
from rest_framework import serializers
from .models import UserDetails

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password','email','id']
        extra_kwargs = {'id': {'read_only': True}, 'password': {'write_only': True}}
        
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    

class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDetails
        fields = ['userId', 'age', 'occupation']
        
    def create(self, validated_data):
        user = UserDetails.objects.create(**validated_data)
        return user