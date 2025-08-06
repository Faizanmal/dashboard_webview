from django.urls import path
from . import views

urlpatterns = [
    path('test/', views.test_api, name='test_api'),
    path('analytics/revenue/', views.revenue_data, name='revenue_data'),
    path('analytics/channels/', views.channel_performance, name='channel_performance'),
    path('analytics/audience/', views.audience_segments, name='audience_segments'),
    path('analytics/metrics/', views.metrics_data, name='metrics_data'),
]   