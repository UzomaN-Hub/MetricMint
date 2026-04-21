"use client";

import { useQuery } from "@tanstack/react-query";

import { ChartCard } from "@/components/data-display/chart-card";
import { useDashboardFilters } from "@/features/filters/hooks/use-dashboard-filters";
import { getTrends } from "@/lib/api/trends";
import { buildTrendSeries } from "@/features/charts/lib/chart-formatters";
import { TrendChart } from "@/features/charts/components/trend-chart";

export function RevenueTrendSection() {
  const { filters } = useDashboardFilters();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["revenue-trends", filters],
    queryFn: () => getTrends("revenue", filters),
  });

  if (isLoading) {
    return <div className="h-[360px] animate-pulse rounded-[1.35rem] bg-muted" />;
  }

  if (isError || !data) {
    return (
      <div className="rounded-[1.35rem] border border-dashed bg-card p-5 text-sm text-muted-foreground">
        Unable to load revenue trend right now.
      </div>
    );
  }

  return (
    <ChartCard
      title="Revenue trend"
      description="Review revenue movement across the selected period."
    >
      <TrendChart
        data={buildTrendSeries(data.points, data.comparison_points)}
        metricName="revenue"
      />
    </ChartCard>
  );
}