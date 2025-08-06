import { CHART_STYLES } from '@/constants/dashboards';

interface TooltipEntry {
  dataKey: string;
  value: number;
  color: string;
}

interface ChartTooltipProps {
  active?: boolean;
  payload?: TooltipEntry[];
  label?: string;
}

export const ChartTooltip = ({ active, payload, label }: ChartTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className={CHART_STYLES.tooltip}>
        {label && <p className={CHART_STYLES.tooltipLabel}>{label}</p>}
        {payload.map((entry, index) => (
          <p key={index} className={CHART_STYLES.tooltipValue}>
            <span 
              className="inline-block w-3 h-3 rounded-full mr-2" 
              style={{ backgroundColor: entry.color }} 
            />
            {entry.dataKey}: {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

interface DonutTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: {
      name: string;
      value: number;
      color: string;
      total: number;
    };
  }>;
}

export const DonutTooltip = ({ active, payload }: DonutTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className={CHART_STYLES.tooltip}>
        <p className={CHART_STYLES.tooltipValue}>
          <span 
            className="inline-block w-3 h-3 rounded-full mr-2" 
            style={{ backgroundColor: data.color }} 
          />
          {data.name}
        </p>
        <p className="text-sm text-muted-foreground">
          {data.value.toLocaleString()} ({((data.value / data.total) * 100).toFixed(1)}%)
        </p>
      </div>
    );
  }
  return null;
};