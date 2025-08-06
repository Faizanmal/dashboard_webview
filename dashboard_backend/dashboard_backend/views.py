# views.py
from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    return HttpResponse("Your Server running successfull!")
