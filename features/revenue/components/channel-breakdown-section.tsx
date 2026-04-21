"use client";

import { useQuery } from "@tanstack/react-query";

import { ChartCard } from "@/components/data-display/chart-card";
import { getBreakdowns } from "@/lib/api/breakdowns";
import { useDashboardFilters } from "@/features/filters/hooks/use-dashboard-filters";
import { BreakdownChart } from "@/features/charts/components/breakdown-chart";
import { formatCurrency } from "@/lib/formatters/currency";

export function ChannelBreakdownSection() {
  const { filters } = useDashboardFilters();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["revenue-by-channel", filters],
    queryFn: () => getBreakdowns("revenue_by_channel", filters),
  });

  if (isLoading) {
    return <div className="h-[360px] animate-pulse rounded-[1.35rem] bg-muted" />;
  }

  if (isError || !data) {
    return (
      <div className="rounded-[1.35rem] border border-dashed bg-card p-5 text-sm text-muted-foreground">
        Unable to load channel breakdown right now.
      </div>
    );
  }

  return (
    <ChartCard
      title="Revenue by channel"
      description="Compare how each acquisition channel contributes to total revenue."
    >
      <BreakdownChart
        data={data.items}
        valueFormatter={(value) => formatCurrency(value)}
      />
    </ChartCard>
  );
}