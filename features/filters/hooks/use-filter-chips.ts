import { useMemo } from "react";

import { useDashboardFilters } from "@/features/filters/hooks/use-dashboard-filters";

export type FilterChip = {
  key: "segment" | "channel" | "device" | "compare" | "date-range";
  label: string;
};

export function useFilterChips() {
  const { filters } = useDashboardFilters();

  return useMemo<FilterChip[]>(() => {
    const chips: FilterChip[] = [];

    if (filters.segment !== "all") {
      chips.push({ key: "segment", label: `Segment: ${filters.segment}` });
    }

    if (filters.channel !== "all") {
      chips.push({ key: "channel", label: `Channel: ${filters.channel}` });
    }

    if (filters.device !== "all") {
      chips.push({ key: "device", label: `Device: ${filters.device}` });
    }

    if (filters.compare) {
      chips.push({ key: "compare", label: "Compare enabled" });
    }

    if (filters.start_date || filters.end_date) {
      chips.push({
        key: "date-range",
        label: `${filters.start_date ?? "Start"} → ${filters.end_date ?? "End"}`,
      });
    }

    return chips;
  }, [filters]);
}