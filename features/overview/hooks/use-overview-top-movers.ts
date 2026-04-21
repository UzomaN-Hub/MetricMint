"use client";

import { useQuery } from "@tanstack/react-query";

import { getReports } from "@/lib/api/reports";
import { useDashboardFilters } from "@/features/filters/hooks/use-dashboard-filters";

export function useOverviewTopMovers() {
  const { filters } = useDashboardFilters();

  return useQuery({
    queryKey: ["overview-top-movers", filters],
    queryFn: () =>
      getReports({
        filters,
        sortBy: "revenue",
        sortOrder: "desc",
        page: 1,
        pageSize: 5,
      }),
  });
}