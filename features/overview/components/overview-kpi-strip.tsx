"use client";

import { useQuery } from "@tanstack/react-query";

import { KpiCard } from "@/components/data-display/kpi-card";
import { useDashboardFilters } from "@/features/filters/hooks/use-dashboard-filters";
import { getMetrics } from "@/lib/api/metrics";

export function OverviewKpiStrip() {
  const { filters } = useDashboardFilters();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["metrics", filters],
    queryFn: () => getMetrics(filters),
  });

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-[138px] animate-pulse rounded-2xl border bg-card"
          />
        ))}
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="rounded-2xl border border-dashed bg-card p-5 text-sm text-muted-foreground">
        Unable to load KPI metrics right now.
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {data.metrics.map((metric) => (
        <KpiCard key={metric.key} metric={metric} />
      ))}
    </div>
  );
}