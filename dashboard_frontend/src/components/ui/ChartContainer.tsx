import React from 'react';
import { cn } from '@/lib/utils';

interface ChartContainerProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function ChartContainer({ title, children, className }: ChartContainerProps) {
  return (
    <div 
      className={cn(
        "chart-container bg-gradient-card rounded-xl border border-glass-border shadow-glass p-4",
        className
      )}
      data-title={title}
    >
      <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
      <div className="chart-content">
        {children}
      </div>
    </div>
  );
}