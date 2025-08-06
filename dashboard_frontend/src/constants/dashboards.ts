// Chart styling constants
export const CHART_COLORS = {
  primary: "hsl(var(--chart-1))",
  secondary: "hsl(var(--chart-2))",
  accent: "hsl(var(--chart-3))",
  warning: "hsl(var(--chart-4))",
  success: "hsl(var(--chart-5))",
} as const;

export const DEFAULT_CHART_COLORS = [
  CHART_COLORS.secondary,
  CHART_COLORS.accent,
];

// Chart margins for consistent spacing
export const CHART_MARGINS = {
  top: 20,
  right: 30,
  left: 20,
  bottom: 20,
} as const;

// Common chart styling classes
export const CHART_STYLES = {
  container: "bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group",
  title: "text-lg font-semibold text-foreground mb-2",
  divider: "w-12 h-1 rounded-full",
  dividerPrimary: "w-12 h-1 bg-gradient-primary rounded-full",
  dividerAccent: "w-12 h-1 bg-gradient-accent rounded-full",
  chartHeight: "h-80",
  tooltip: "bg-card border border-border rounded-xl p-3 shadow-lg",
  tooltipLabel: "text-sm text-muted-foreground mb-1",
  tooltipValue: "text-sm font-semibold text-foreground",
  grid: "hsl(var(--border))",
  axis: "hsl(var(--muted-foreground))",
} as const;

// MetricCard color configurations
export const METRIC_CARD_COLORS = {
  primary: {
    gradient: 'from-chart-1/20 to-chart-2/20 border-chart-1/30',
    icon: 'text-chart-1'
  },
  accent: {
    gradient: 'from-accent/20 to-chart-3/20 border-accent/30',
    icon: 'text-accent'
  },
  success: {
    gradient: 'from-chart-5/20 to-chart-1/20 border-chart-5/30',
    icon: 'text-chart-5'
  },
  warning: {
    gradient: 'from-chart-3/20 to-chart-4/20 border-chart-3/30',
    icon: 'text-chart-3'
  }
} as const;

// Chart component props types
export interface BaseChartData {
  name: string;
  value: number;
}

export interface LineChartData extends BaseChartData {
  revenue?: number;
}

export interface BarChartData extends BaseChartData {
  comparison?: number;
}

export interface DonutChartData extends BaseChartData {
  color: string;
}