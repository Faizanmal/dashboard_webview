import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { METRIC_CARD_COLORS } from '@/constants/dashboards';

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: React.ReactNode;
  color?: 'primary' | 'accent' | 'success' | 'warning';
}

const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeType, 
  icon, 
  color = 'primary' 
}: MetricCardProps) => {

  return (
    <div className={cn(
      "relative overflow-hidden rounded-xl border border-border bg-card backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] group",
      METRIC_CARD_COLORS[color].gradient
    )}>
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-muted/20 opacity-60" />
      
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-smooth" />
      </div>
      
      <div className="relative p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={cn(
            "p-3 rounded-xl bg-primary/10 border border-primary/20 transition-transform duration-300 group-hover:scale-110",
            METRIC_CARD_COLORS[color].icon
          )}>
            {icon}
          </div>
          
          <div className={cn(
            "flex items-center text-sm font-medium px-2 py-1 rounded-full",
            changeType === 'increase' 
              ? "text-chart-5 bg-chart-5/10" 
              : "text-chart-4 bg-chart-4/10"
          )}>
            {changeType === 'increase' ? (
              <TrendingUp className="w-3 h-3 mr-1" />
            ) : (
              <TrendingDown className="w-3 h-3 mr-1" />
            )}
            {Math.abs(change)}%
          </div>
        </div>
        
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            {title}
          </h3>
          <p className="text-3xl font-bold text-foreground transition-all duration-300 group-hover:text-primary">
            {value}
          </p>
        </div>
        
        <div className="mt-4 text-xs text-muted-foreground">
          <span className={cn(
            changeType === 'increase' ? "text-chart-5" : "text-chart-4"
          )}>
            {changeType === 'increase' ? '+' : '-'}{Math.abs(change)}%
          </span>
          {' '}from last month
        </div>
      </div>
    </div>
  );
};

export default MetricCard;