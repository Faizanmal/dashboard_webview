#!/usr/bin/env python3
"""
Test script to verify all API endpoints are working correctly
Run this script to test your Django API endpoints
"""

import requests
import json

# Base URL for your Django API
BASE_URL = "http://localhost:8000/api/v1"

def test_endpoint(endpoint, description):
    """Test a single endpoint and print the result"""
    url = f"{BASE_URL}/{endpoint}"
    try:
        response = requests.get(url)
        print(f"✅ {description}")
        print(f"   URL: {url}")
        print(f"   Status: {response.status_code}")
        if response.status_code == 200:
            data = response.json()
            print(f"   Data: {json.dumps(data, indent=2)[:200]}...")
        else:
            print(f"   Error: {response.text}")
        print()
        return response.status_code == 200
    except requests.exceptions.ConnectionError:
        print(f"❌ {description}")
        print(f"   URL: {url}")
        print(f"   Error: Could not connect to server. Make sure Django is running!")
        print()
        return False
    except Exception as e:
        print(f"❌ {description}")
        print(f"   URL: {url}")
        print(f"   Error: {str(e)}")
        print()
        return False

def main():
    """Test all API endpoints"""
    print("🚀 Testing Dashboard API Endpoints")
    print("=" * 50)
    
    # Test endpoints
    endpoints = [
        ("test", "Test API endpoint"),
        ("analytics/revenue", "Revenue data endpoint"),
        ("analytics/channels", "Channel performance endpoint"),
        ("analytics/audience", "Audience segments endpoint"),
        ("analytics/metrics", "Metrics data endpoint"),
        ("campaigns", "Campaigns data endpoint"),
    ]
    
    success_count = 0
    total_count = len(endpoints)
    
    for endpoint, description in endpoints:
        if test_endpoint(endpoint, description):
            success_count += 1
    
    print("=" * 50)
    print(f"📊 Results: {success_count}/{total_count} endpoints working")
    
    if success_count == total_count:
        print("🎉 All endpoints are working correctly!")
        print("Your frontend should now be able to connect to the backend.")
    else:
        print("⚠️  Some endpoints are not working. Check the Django server logs.")
        print("Make sure Django is running with: python manage.py runserver")

if __name__ == "__main__":
    main() 