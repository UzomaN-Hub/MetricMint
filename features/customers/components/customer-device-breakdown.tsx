"use client";

import { useQuery } from "@tanstack/react-query";

import { ChartCard } from "@/components/data-display/chart-card";
import { getBreakdowns } from "@/lib/api/breakdowns";
import { useDashboardFilters } from "@/features/filters/hooks/use-dashboard-filters";
import { BreakdownChart } from "@/features/charts/components/breakdown-chart";

export function CustomerDeviceBreakdown() {
  const { filters } = useDashboardFilters();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["customers-by-device", filters],
    queryFn: () => getBreakdowns("customers_by_device", filters),
  });

  if (isLoading) {
    return <div className="h-[360px] animate-pulse rounded-[1.35rem] bg-muted" />;
  }

  if (isError || !data) {
    return (
      <div className="rounded-[1.35rem] border border-dashed bg-card p-5 text-sm text-muted-foreground">
        Unable to load customer device breakdown right now.
      </div>
    );
  }

  return (
    <ChartCard
      title="Customers by device"
      description="Review where customer activity is concentrated across devices."
    >
      <BreakdownChart
        data={data.items}
        valueFormatter={(value) => value.toLocaleString()}
      />
    </ChartCard>
  );
}