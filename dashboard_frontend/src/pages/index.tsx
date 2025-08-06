import { DollarSign, Users, TrendingUp, Target } from 'lucide-react';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import MetricCard from '@/components/Dashboard/MetricCard';
import LineChart from '@/components/Dashboard/Linechart';
import BarChart from '@/components/Dashboard/Barchat';
import DonutChart from '@/components/Dashboard/Donutchart';
import DataTable from '@/components/Dashboard/DataTable';
import '../index.css';

import {
  useRevenueData,
  useChannelPerformance,
  useAudienceSegments,
  useCampaigns,
  useMetrics
} from '@/hooks/useDashboardData';

const Index = () => {
const { data: revenueData, isLoading: loadingRevenue } = useRevenueData();
const { data: channelPerformance, isLoading: loadingChannels } = useChannelPerformance();
const { data: audienceSegments, isLoading: loadingAudience } = useAudienceSegments();
const { data: campaignData, isLoading: loadingCampaigns } = useCampaigns();
const { data: metricsData, isLoading: loadingMetrics } = useMetrics();

const isLoading = loadingRevenue || loadingChannels || loadingAudience || loadingCampaigns || loadingMetrics;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dashboard-bg via-background to-dashboard-bg flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-glow animate-pulse-glow">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-foreground">Business Insights</h1>
            <p className="text-muted-foreground">Loading your analytics dashboard...</p>
          </div>
          <div className="flex space-x-1 justify-center">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-accent rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Revenue"
            value={metricsData.totalRevenue.value}
            change={metricsData.totalRevenue.change}
            changeType={metricsData.totalRevenue.changeType}
            icon={<DollarSign className="w-6 h-6" />}
            color="primary"
          />
          <MetricCard
            title="Active Users"
            value={metricsData.totalUsers.value}
            change={metricsData.totalUsers.change}
            changeType={metricsData.totalUsers.changeType}
            icon={<Users className="w-6 h-6" />}
            color="accent"
          />
          <MetricCard
            title="Conversions"
            value={metricsData.conversions.value}
            change={metricsData.conversions.change}
            changeType={metricsData.conversions.changeType}
            icon={<Target className="w-6 h-6" />}
            color="success"
          />
          <MetricCard
            title="Growth Rate"
            value={metricsData.growthRate.value}
            change={metricsData.growthRate.change}
            changeType={metricsData.growthRate.changeType}
            icon={<TrendingUp className="w-6 h-6" />}
            color="warning"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:col-span-2">
            <LineChart 
              data={revenueData} 
              title="Revenue Trends"
              color="hsl(var(--chart-1))"
            />
          </div>
          
          <BarChart 
            data={channelPerformance} 
            title="Channel Performance"
            colors={["hsl(var(--chart-2))", "hsl(var(--chart-3))"]}
          />
          
          <DonutChart 
            data={audienceSegments} 
            title="Audience Segments"
          />
        </div>

        {/* Data Table */}
        <DataTable 
          data={campaignData} 
          title="Campaign Performance"
        />
      </div>
    </DashboardLayout>
  );
};

export default Index;