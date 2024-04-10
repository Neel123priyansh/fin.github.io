from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework import status
from .serializers import UserDetailSerializer
from rest_framework.authtoken.models import Token

# Create your views here.


@api_view(['GET'])
def login(request):
    try:
        user = User.objects.get(username=request.data['user']['username'])
        if user.check_password(request.data['user']['password']):
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    except KeyError:
        return Response({'message': 'Invalid request'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    


@api_view(['POST'])
def register(request):
    try:
        data = {
            'username': request.data['user']['username'],
            'password': request.data['user']['password'],
            'email': request.data['user']['email'],
        }
        age = request.data['user']['age']
        occupation = request.data['user']['occupation']
        user = UserSerializer(data=data)
        if user.is_valid():
            user.save()
            userDetails = UserDetailSerializer(data={'userId': user.data['id'], 'age': age, 'occupation': occupation})
            if not userDetails.is_valid():
                return Response({'message': 'Invalid request'}, status=status.HTTP_400_BAD_REQUEST)
            userDetails.save()
            token = Token.objects.create(user=User.objects.get(username=request.data['user']['username']))
            return Response({'message': 'User created successfully','authToken':token.key}, status=status.HTTP_201_CREATED)
        else:
            return Response({'message': 'Invalid request'}, status=status.HTTP_400_BAD_REQUEST)
    except KeyError:
        return Response({'message': 'Invalid request'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)