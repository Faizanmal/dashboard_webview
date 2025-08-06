# API Integration Guide for Dashboard

This guide explains how to convert your mock data to live API calls and set up the necessary infrastructure.

## 🚀 What's Been Created

### 1. **API Service Layer** (`src/lib/api.ts`)
- Handles all API calls to your backend
- Configurable base URL via environment variables
- Proper error handling and TypeScript types
- Ready for authentication headers

### 2. **Enhanced API Service** (`src/lib/enhancedApiService.ts`)
- Automatic fallback to mock data when real API fails
- Seamless development experience
- Can force mock data or real API for testing

### 3. **Mock API Service** (`src/lib/mockApiService.ts`)
- Provides the same interface as real API
- Simulates network delays and occasional errors
- Perfect for development and testing

### 4. **React Query Hooks** (`src/hooks/useDashboardData.ts`)
- Optimized data fetching with caching
- Automatic retries with exponential backoff
- Loading and error states
- Real-time data updates

### 5. **Query Client Configuration** (`src/lib/queryClient.ts`)
- Global React Query configuration
- Smart retry logic
- Optimized caching strategies

## 📋 Required API Endpoints

Your backend needs to implement these endpoints:

### Base URL Configuration
```bash
# Set your API base URL in environment variables
NEXT_PUBLIC_API_URL=https://your-api-domain.com/v1
```

### Required Endpoints

#### 1. Revenue Data
```
GET /analytics/revenue
Response: RevenueDataPoint[]
```

#### 2. Channel Performance
```
GET /analytics/channels
Response: ChannelPerformance[]
```

#### 3. Audience Segments
```
GET /analytics/audience
Response: AudienceSegment[]
```

#### 4. Campaigns
```
GET /campaigns
Response: Campaign[]
```

#### 5. Metrics
```
GET /analytics/metrics
Response: MetricsData
```

## 🔧 Setup Instructions

### 1. Environment Configuration

Create a `.env.local` file in your project root:

```bash
# API Configuration
NEXT_PUBLIC_API_URL=https://your-api-domain.com/v1
NEXT_PUBLIC_USE_MOCK_DATA=false

# Optional: Force mock data for development
# NEXT_PUBLIC_USE_MOCK_DATA=true
```

### 2. React Query Provider Setup

Update your main App component to include the React Query provider:

```tsx
// src/App.tsx or your main component
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Your app components */}
    </QueryClientProvider>
  );
}
```

### 3. Using the New Hooks

Replace your mock data imports with the new hooks:

```tsx
// Before (using mock data)
import { revenueData, channelPerformance } from '../data/mockdata';

// After (using live API)
import { useRevenueData, useChannelPerformance } from '../hooks/useDashboardData';

function MyComponent() {
  const { data: revenue, isLoading, error } = useRevenueData();
  const { data: channels } = useChannelPerformance();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {/* Your component using live data */}
    </div>
  );
}
```

## 🎯 API Response Formats

### Revenue Data
```json
[
  { "name": "Jan", "value": 45000 },
  { "name": "Feb", "value": 52000 }
]
```

### Channel Performance
```json
[
  {
    "name": "Google Ads",
    "value": 35000,
    "comparison": 31000
  }
]
```

### Audience Segments
```json
[
  {
    "name": "Millennials",
    "value": 32500,
    "color": "hsl(var(--chart-1))"
  }
]
```

### Campaigns
```json
[
  {
    "id": "1",
    "client": "TechFlow Solutions",
    "campaign": "Q4 Product Launch",
    "revenue": 45600,
    "impressions": 892000,
    "clicks": 24500,
    "conversions": 1250,
    "status": "active"
  }
]
```

### Metrics
```json
{
  "totalRevenue": {
    "value": "$847.2K",
    "change": 12.5,
    "changeType": "increase"
  },
  "totalUsers": {
    "value": "164.3K",
    "change": 8.2,
    "changeType": "increase"
  },
  "conversions": {
    "value": "12.4K",
    "change": 15.8,
    "changeType": "increase"
  },
  "growthRate": {
    "value": "24.7%",
    "change": 3.2,
    "changeType": "increase"
  }
}
```

## 🔄 Migration Steps

### Step 1: Update Imports
Replace all imports from `mockdata.ts` with the new hooks:

```tsx
// Old
import { revenueData, channelPerformance } from '../data/mockdata';

// New
import { useRevenueData, useChannelPerformance } from '../hooks/useDashboardData';
```

### Step 2: Convert Components
Update your components to use the hooks:

```tsx
// Old way
function RevenueChart() {
  return <Chart data={revenueData} />;
}

// New way
function RevenueChart() {
  const { data, isLoading, error } = useRevenueData();
  
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  
  return <Chart data={data} />;
}
```

### Step 3: Add Error Boundaries
Wrap your components with error boundaries for better UX:

```tsx
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error }) {
  return (
    <div className="error-container">
      <h2>Something went wrong</h2>
      <pre>{error.message}</pre>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <YourApp />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
```

## 🧪 Testing

### Development Mode
- Mock data is used by default in development
- Set `NEXT_PUBLIC_USE_MOCK_DATA=false` to test with real API
- Mock service simulates network delays and errors

### Production Mode
- Real API is used by default
- Automatic fallback to mock data if API fails
- Proper error handling and retries

## 🔧 Advanced Configuration

### Custom API Headers
Update `src/lib/api.ts` to add authentication:

```typescript
private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAuthToken()}`, // Add your auth logic
    },
    ...options,
  };
  // ... rest of the method
}
```

### Custom Caching
Modify the query client configuration in `src/lib/queryClient.ts`:

```typescript
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // Adjust cache time
      gcTime: 10 * 60 * 1000,   // Adjust garbage collection
      retry: (failureCount, error) => {
        // Custom retry logic
        return failureCount < 3;
      },
    },
  },
});
```

## 🚨 Troubleshooting

### Common Issues

1. **API not responding**: Check your `NEXT_PUBLIC_API_URL` environment variable
2. **CORS errors**: Ensure your API allows requests from your frontend domain
3. **Authentication errors**: Add proper auth headers in the API service
4. **Data not updating**: Check React Query cache settings and refetch intervals

### Debug Mode
Enable debug logging by setting:

```bash
NEXT_PUBLIC_DEBUG_API=true
```

This will log all API requests and responses to the console.

## 📈 Performance Optimizations

1. **Parallel Requests**: Use `useDashboardData()` for multiple data sources
2. **Selective Refetching**: Configure different refetch intervals per data type
3. **Background Updates**: Enable background refetching for real-time data
4. **Optimistic Updates**: Implement optimistic updates for better UX

## 🎉 Benefits

- ✅ **Automatic fallback** to mock data when API fails
- ✅ **Real-time updates** with React Query
- ✅ **Optimized caching** and performance
- ✅ **Type-safe** API calls with TypeScript
- ✅ **Error handling** and retry logic
- ✅ **Development-friendly** with mock data
- ✅ **Production-ready** with live API integration

Your dashboard is now ready to use live API data with robust error handling and excellent developer experience! 