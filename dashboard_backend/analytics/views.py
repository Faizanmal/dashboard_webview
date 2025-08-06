from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import random
from datetime import datetime, timedelta

# Create your views here.

@api_view(['GET'])
def test_api(request):
    """Test endpoint to verify API is working"""
    return Response({
        'message': 'API is working!',
        'status': 'success',
        'timestamp': datetime.now().isoformat()
    })

@api_view(['GET'])
def revenue_data(request):
    """Get revenue data for the dashboard"""
    # Generate sample revenue data for the last 12 months
    data = [
        {'name': 'Jan', 'value': 45000},
        {'name': 'Feb', 'value': 52000},
        {'name': 'Mar', 'value': 48000},
        {'name': 'Apr', 'value': 61000},
        {'name': 'May', 'value': 58000},
        {'name': 'Jun', 'value': 67000},
        {'name': 'Jul', 'value': 72000},
        {'name': 'Aug', 'value': 69000},
        {'name': 'Sep', 'value': 78000},
        {'name': 'Oct', 'value': 82000},
        {'name': 'Nov', 'value': 85000},
        {'name': 'Dec', 'value': 91000}
    ]
    
    return Response(data)

@api_view(['GET'])
def channel_performance(request):
    """Get channel performance data"""
    channels = [
        {'name': 'Google Ads', 'value': 35000, 'comparison': 31000},
        {'name': 'Facebook', 'value': 28000, 'comparison': 25000},
        {'name': 'Instagram', 'value': 22000, 'comparison': 19000},
        {'name': 'LinkedIn', 'value': 18000, 'comparison': 16000},
        {'name': 'Twitter', 'value': 12000, 'comparison': 14000},
        {'name': 'YouTube', 'value': 15000, 'comparison': 12000}
    ]
    
    return Response(channels)

@api_view(['GET'])
def audience_segments(request):
    """Get audience segments data"""
    segments = [
        {'name': 'Millennials', 'value': 32500, 'color': 'hsl(var(--chart-1))'},
        {'name': 'Gen Z', 'value': 28000, 'color': 'hsl(var(--chart-2))'},
        {'name': 'Gen X', 'value': 19500, 'color': 'hsl(var(--chart-3))'},
        {'name': 'Baby Boomers', 'value': 12000, 'color': 'hsl(var(--chart-4))'},
        {'name': 'Gen Alpha', 'value': 8000, 'color': 'hsl(var(--chart-5))'}
    ]
    
    return Response(segments)

@api_view(['GET'])
def metrics_data(request):
    """Get metrics data for the dashboard"""
    metrics = {
        'totalRevenue': {
            'value': '$812.2K',
            'change': 12.5,
            'changeType': 'increase'
        },
        'totalUsers': {
            'value': '164.3K',
            'change': 8.2,
            'changeType': 'increase'
        },
        'conversions': {
            'value': '12.4K',
            'change': 15.8,
            'changeType': 'increase'
        },
        'growthRate': {
            'value': '24.7%',
            'change': 3.2,
            'changeType': 'increase'
        }
    }
    
    return Response(metrics)
