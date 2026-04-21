import { useDashboardFiltersContext } from "@/providers/dashboard-filters-provider";

export function useDashboardFilters() {
  return useDashboardFiltersContext();
}