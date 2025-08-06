export const revenueData = [
  { name: 'Jan', value: 45000 },
  { name: 'Feb', value: 52000 },
  { name: 'Mar', value: 48000 },
  { name: 'Apr', value: 61000 },
  { name: 'May', value: 58000 },
  { name: 'Jun', value: 67000 },
  { name: 'Jul', value: 72000 },
  { name: 'Aug', value: 69000 },
  { name: 'Sep', value: 78000 },
  { name: 'Oct', value: 82000 },
  { name: 'Nov', value: 85000 },
  { name: 'Dec', value: 91000 }
];

export const channelPerformance = [
  { name: 'Google Ads', value: 35000, comparison: 31000 },
  { name: 'Facebook', value: 28000, comparison: 25000 },
  { name: 'Instagram', value: 22000, comparison: 19000 },
  { name: 'LinkedIn', value: 18000, comparison: 16000 },
  { name: 'Twitter', value: 12000, comparison: 14000 },
  { name: 'YouTube', value: 15000, comparison: 12000 }
];

export const audienceSegments = [
  { name: 'Millennials', value: 32500, color: 'hsl(var(--chart-1))' },
  { name: 'Gen Z', value: 28000, color: 'hsl(var(--chart-2))' },
  { name: 'Gen X', value: 19500, color: 'hsl(var(--chart-3))' },
  { name: 'Baby Boomers', value: 12000, color: 'hsl(var(--chart-4))' },
  { name: 'Gen Alpha', value: 8000, color: 'hsl(var(--chart-5))' }
];

export const campaignData = [
  {
    id: '1',
    client: 'TechFlow Solutions',
    campaign: 'Q4 Product Launch',
    revenue: 45600,
    impressions: 892000,
    clicks: 24500,
    conversions: 1250,
    status: 'active' as const
  },
  {
    id: '2',
    client: 'EcoLiving Co.',
    campaign: 'Sustainable Products',
    revenue: 32400,
    impressions: 654000,
    clicks: 18200,
    conversions: 890,
    status: 'active' as const
  },
  {
    id: '3',
    client: 'FinanceFirst',
    campaign: 'Investment App Promo',
    revenue: 58900,
    impressions: 1200000,
    clicks: 31000,
    conversions: 1680,
    status: 'active' as const
  },
  {
    id: '4',
    client: 'HealthMax',
    campaign: 'Wellness Platform',
    revenue: 41200,
    impressions: 780000,
    clicks: 22100,
    conversions: 1120,
    status: 'paused' as const
  },
  {
    id: '5',
    client: 'EduLearn',
    campaign: 'Online Courses',
    revenue: 28700,
    impressions: 560000,
    clicks: 16800,
    conversions: 740,
    status: 'active' as const
  },
  {
    id: '6',
    client: 'StyleHub',
    campaign: 'Fashion Collection',
    revenue: 37500,
    impressions: 920000,
    clicks: 25600,
    conversions: 980,
    status: 'completed' as const
  },
  {
    id: '7',
    client: 'FoodieDelight',
    campaign: 'Recipe App Launch',
    revenue: 22100,
    impressions: 440000,
    clicks: 14200,
    conversions: 520,
    status: 'active' as const
  },
  {
    id: '8',
    client: 'TravelWise',
    campaign: 'Vacation Packages',
    revenue: 51800,
    impressions: 1100000,
    clicks: 28700,
    conversions: 1320,
    status: 'active' as const
  },
  {
    id: '9',
    client: 'FitLife',
    campaign: 'Fitness Equipment',
    revenue: 39600,
    impressions: 820000,
    clicks: 21500,
    conversions: 890,
    status: 'paused' as const
  },
  {
    id: '10',
    client: 'SmartHome',
    campaign: 'IoT Devices',
    revenue: 47300,
    impressions: 950000,
    clicks: 26100,
    conversions: 1150,
    status: 'active' as const
  },
  {
    id: '11',
    client: 'ArtSpace',
    campaign: 'Digital Art Platform',
    revenue: 19800,
    impressions: 380000,
    clicks: 12600,
    conversions: 420,
    status: 'completed' as const
  },
  {
    id: '12',
    client: 'GreenEnergy',
    campaign: 'Solar Solutions',
    revenue: 62400,
    impressions: 1350000,
    clicks: 34200,
    conversions: 1890,
    status: 'active' as const
  }
];

export const metricsData = {
  totalRevenue: {
    value: '$847.2K',
    change: 12.5,
    changeType: 'increase' as const
  },
  totalUsers: {
    value: '164.3K',
    change: 8.2,
    changeType: 'increase' as const
  },
  conversions: {
    value: '12.4K',
    change: 15.8,
    changeType: 'increase' as const
  },
  growthRate: {
    value: '24.7%',
    change: 3.2,
    changeType: 'increase' as const
  }
}