from django.urls import path, include
from . import views

urlpatterns = [
    path('campaigns', views.campaigns_data, name='campaigns_data'),
] 
from django.urls import path
from . import views

urlpatterns = [
    path('campaigns/', views.campaigns_data, name='campaigns_data'),
] 