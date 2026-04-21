"use client";

import { useQuery } from "@tanstack/react-query";

import { ChartCard } from "@/components/data-display/chart-card";
import { TrendChart } from "@/features/charts/components/trend-chart";
import { useDashboardFilters } from "@/features/filters/hooks/use-dashboard-filters";
import { getTrends } from "@/lib/api/trends";
import { buildTrendSeries } from "@/features/charts/lib/chart-formatters";
import { Button } from "@/components/ui/button";

export function OverviewTrendSection() {
  const { filters, setCompare } = useDashboardFilters();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["trends", "revenue", filters],
    queryFn: () => getTrends("revenue", filters),
  });

  if (isLoading) {
    return <div className="h-[360px] animate-pulse rounded-[1.35rem] bg-muted" />;
  }

  if (isError || !data) {
    return (
      <div className="rounded-[1.35rem] border border-dashed bg-card p-5 text-sm text-muted-foreground">
        Unable to load trend data right now.
      </div>
    );
  }

  const chartData = buildTrendSeries(data.points, data.comparison_points);

  return (
    <ChartCard
      title="How has revenue moved over time?"
      description="Track the current period and compare it with the previous period when needed."
      actions={
        <Button
          variant={filters.compare ? "default" : "outline"}
          onClick={() => setCompare(!filters.compare)}
        >
          {filters.compare ? "Comparison On" : "Enable Compare"}
        </Button>
      }
    >
      <TrendChart data={chartData} metricName="revenue" />
    </ChartCard>
  );
}