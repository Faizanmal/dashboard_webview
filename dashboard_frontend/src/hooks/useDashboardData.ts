// Custom hooks for dashboard data fetching using React Query

import { useQuery } from '@tanstack/react-query';
import { enhancedApiService } from '../lib/enhancedApiService';

// Individual data hooks
export const useRevenueData = () => {
  return useQuery({
    queryKey: ['revenue'],
    queryFn: () => enhancedApiService.getRevenueData(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
    retry: 3, // Retry failed requests up to 3 times
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
  });
};

export const useChannelPerformance = () => {
  return useQuery({
    queryKey: ['channels'],
    queryFn: () => enhancedApiService.getChannelPerformance(),
    staleTime: 5 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

export const useAudienceSegments = () => {
  return useQuery({
    queryKey: ['audience'],
    queryFn: () => enhancedApiService.getAudienceSegments(),
    staleTime: 10 * 60 * 1000, // 10 minutes for audience data
    refetchInterval: 10 * 60 * 1000,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

export const useCampaigns = () => {
  return useQuery({
    queryKey: ['campaigns'],
    queryFn: () => enhancedApiService.getCampaigns(),
    staleTime: 2 * 60 * 1000, // 2 minutes for campaign data
    refetchInterval: 2 * 60 * 1000,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

export const useMetrics = () => {
  return useQuery({
    queryKey: ['metrics'],
    queryFn: () => enhancedApiService.getMetrics(),
    staleTime: 1 * 60 * 1000, // 1 minute for metrics
    refetchInterval: 1 * 60 * 1000,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

// Combined dashboard data hook
export const useDashboardData = () => {
  return useQuery({
    queryKey: ['dashboard'],
    queryFn: () => enhancedApiService.getDashboardData(),
    staleTime: 2 * 60 * 1000,
    refetchInterval: 2 * 60 * 1000,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

// Hook for filtered campaigns
export const useFilteredCampaigns = (status?: 'active' | 'paused' | 'completed') => {
  const { data: campaigns, ...rest } = useCampaigns();
  
  const filteredCampaigns = campaigns?.filter(campaign => 
    status ? campaign.status === status : true
  );

  return {
    data: filteredCampaigns,
    ...rest,
  };
};

// Hook for campaign statistics
export const useCampaignStats = () => {
  const { data: campaigns, ...rest } = useCampaigns();
  
  if (!campaigns) {
    return {
      data: null,
      ...rest,
    };
  }

  const stats = {
    totalCampaigns: campaigns.length,
    activeCampaigns: campaigns.filter(c => c.status === 'active').length,
    pausedCampaigns: campaigns.filter(c => c.status === 'paused').length,
    completedCampaigns: campaigns.filter(c => c.status === 'completed').length,
    totalRevenue: campaigns.reduce((sum, c) => sum + c.revenue, 0),
    totalImpressions: campaigns.reduce((sum, c) => sum + c.impressions, 0),
    totalClicks: campaigns.reduce((sum, c) => sum + c.clicks, 0),
    totalConversions: campaigns.reduce((sum, c) => sum + c.conversions, 0),
  };

  return {
    data: stats,
    ...rest,
  };
};

// Hook to check if using mock data
export const useMockDataStatus = () => {
  return useQuery({
    queryKey: ['mock-status'],
    queryFn: () => enhancedApiService.isUsingMockData(),
    staleTime: Infinity, // Never refetch this
  });
}; 