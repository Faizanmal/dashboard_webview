// Dashboard data service using enhanced API
// This replaces the mock data with live API calls

import { enhancedApiService } from '../lib/enhancedApiService';
import type {
  RevenueDataPoint,
  ChannelPerformance,
  AudienceSegment,
  Campaign,
  MetricsData,
} from '../lib/api';

// Export the same interface as the original mock data
// These functions now use the enhanced API service with automatic fallback

export const getRevenueData = async (): Promise<RevenueDataPoint[]> => {
  return enhancedApiService.getRevenueData();
};

export const getChannelPerformance = async (): Promise<ChannelPerformance[]> => {
  return enhancedApiService.getChannelPerformance();
};

export const getAudienceSegments = async (): Promise<AudienceSegment[]> => {
  return enhancedApiService.getAudienceSegments();
};

export const getCampaignData = async (): Promise<Campaign[]> => {
  return enhancedApiService.getCampaigns();
};

export const getMetricsData = async (): Promise<MetricsData> => {
  return enhancedApiService.getMetrics();
};

// Legacy exports for backward compatibility
// These maintain the same structure as the original mock data
export const revenueData = getRevenueData;
export const channelPerformance = getChannelPerformance;
export const audienceSegments = getAudienceSegments;
export const campaignData = getCampaignData;
export const metricsData = getMetricsData;

// Helper function to get all dashboard data at once
export const getDashboardData = async () => {
  return enhancedApiService.getDashboardData();
};

// Check if currently using mock data
export const isUsingMockData = (): boolean => {
  return enhancedApiService.isUsingMockData();
}; 