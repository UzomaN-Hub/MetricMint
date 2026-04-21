"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { chartColors } from "@/features/charts/config/chart-colors";
import { formatCurrency } from "@/lib/formatters/currency";
import { formatShortDate } from "@/lib/formatters/date";
import { formatPercentage } from "@/lib/formatters/percentage";
import type { TrendMetricName } from "@/types/api";
import type { TrendSeriesPoint } from "@/features/charts/types/chart-types";

type TrendChartProps = {
  data: TrendSeriesPoint[];
  metricName: TrendMetricName;
};

function formatValue(metricName: TrendMetricName, value: number) {
  if (metricName === "revenue") return formatCurrency(value);
  if (metricName === "conversion_rate") return formatPercentage(value);
  return value.toLocaleString();
}

export function TrendChart({ data, metricName }: TrendChartProps) {
  const strokeColor =
    metricName === "orders"
      ? chartColors.orders
      : metricName === "conversion_rate"
        ? chartColors.conversion
        : chartColors.revenue;

  return (
    <div className="min-w-0 h-[340px] w-full">
      <ResponsiveContainer width="100%" height="100%" minWidth={280} minHeight={320}>
        <AreaChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
          <defs>
            <linearGradient id="primaryTrendFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={strokeColor} stopOpacity={0.28} />
              <stop offset="95%" stopColor={strokeColor} stopOpacity={0.02} />
            </linearGradient>
          </defs>

          <CartesianGrid
            stroke={chartColors.mutedGrid}
            vertical={false}
            strokeDasharray="4 4"
          />
          <XAxis
            dataKey="date"
            tickFormatter={formatShortDate}
            tickLine={false}
            axisLine={false}
            fontSize={12}
          />
          <YAxis
            tickFormatter={(value) => {
              if (metricName === "revenue") return `$${Number(value) / 1000}k`;
              if (metricName === "conversion_rate") return `${value}%`;
              return String(value);
            }}
            tickLine={false}
            axisLine={false}
            fontSize={12}
          />
          <Tooltip
            contentStyle={{
              borderRadius: 16,
              border: "1px solid color-mix(in oklab, var(--color-border) 100%, transparent)",
              background: "var(--color-card)",
              boxShadow: "0 10px 28px -18px rgba(15, 23, 42, 0.28)",
            }}
            formatter={(value, name) => {
              const numericValue =
                typeof value === "number" ? value : Number(value ?? 0);

              return [
                formatValue(metricName, numericValue),
                name === "comparison" ? "Previous period" : "Current period",
              ];
            }}
            labelFormatter={(value) => formatShortDate(String(value))}
          />

          <Area
            type="monotone"
            dataKey="comparison"
            stroke={chartColors.comparison}
            fill="transparent"
            strokeWidth={2}
            strokeDasharray="6 6"
            dot={false}
            activeDot={{ r: 4 }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke={strokeColor}
            fill="url(#primaryTrendFill)"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}