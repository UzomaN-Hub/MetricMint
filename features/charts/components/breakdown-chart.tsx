"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { BreakdownItem } from "@/types/api";
import { formatCurrency } from "@/lib/formatters/currency";
import { chartColors } from "@/features/charts/config/chart-colors";

export function BreakdownChart({
  data,
  valueFormatter = (value: number) => formatCurrency(value),
}: {
  data: BreakdownItem[];
  valueFormatter?: (value: number) => string;
}) {
  return (
    <div className="min-w-0 h-[340px] w-full">
      <ResponsiveContainer width="100%" height="100%" minWidth={280} minHeight={320}>
        <BarChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
          <CartesianGrid
            stroke={chartColors.mutedGrid}
            vertical={false}
            strokeDasharray="4 4"
          />
          <XAxis dataKey="label" tickLine={false} axisLine={false} fontSize={12} />
          <YAxis tickLine={false} axisLine={false} fontSize={12} />
          <Tooltip
            contentStyle={{
              borderRadius: 16,
              border: "1px solid color-mix(in oklab, var(--color-border) 100%, transparent)",
              background: "var(--color-card)",
              boxShadow: "0 10px 28px -18px rgba(15, 23, 42, 0.28)",
            }}
            formatter={(value) => {
              const numericValue =
                typeof value === "number" ? value : Number(value ?? 0);

              return [valueFormatter(numericValue), "Value"];
            }}
            labelFormatter={(label) => String(label)}
          />
          <Bar
            dataKey="value"
            radius={[10, 10, 0, 0]}
            fill={chartColors.revenue}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}