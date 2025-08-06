from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import random

# Create your views here.

@api_view(['GET'])
def campaigns_data(request):
    """Get campaigns data for the dashboard"""
    campaigns = [
        {
            'id': '1',
            'client': 'TechCorp Inc.',
            'campaign': 'Summer Product Launch',
            'revenue': 125000,
            'impressions': 450000,
            'clicks': 12500,
            'conversions': 1250,
            'status': 'active'
        },
        {
            'id': '2',
            'client': 'FashionBrand',
            'campaign': 'Holiday Collection',
            'revenue': 89000,
            'impressions': 320000,
            'clicks': 8900,
            'conversions': 890,
            'status': 'active'
        },
        {
            'id': '3',
            'client': 'StartupXYZ',
            'campaign': 'Brand Awareness',
            'revenue': 67000,
            'impressions': 280000,
            'clicks': 6700,
            'conversions': 670,
            'status': 'paused'
        },
        {
            'id': '4',
            'client': 'Enterprise Solutions',
            'campaign': 'B2B Lead Generation',
            'revenue': 156000,
            'impressions': 520000,
            'clicks': 15600,
            'conversions': 1560,
            'status': 'active'
        },
        {
            'id': '5',
            'client': 'Local Business',
            'campaign': 'Local SEO Campaign',
            'revenue': 34000,
            'impressions': 120000,
            'clicks': 3400,
            'conversions': 340,
            'status': 'completed'
        },
        {
            'id': '6',
            'client': 'E-commerce Store',
            'campaign': 'Retargeting Campaign',
            'revenue': 78000,
            'impressions': 290000,
            'clicks': 7800,
            'conversions': 780,
            'status': 'active'
        }
    ]
    
    return Response(campaigns)
