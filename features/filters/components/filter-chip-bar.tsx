"use client";

import { X } from "lucide-react";

import { useDashboardFilters } from "@/features/filters/hooks/use-dashboard-filters";
import { useFilterChips } from "@/features/filters/hooks/use-filter-chips";
import { Button } from "@/components/ui/button";

export function FilterChipBar() {
  const chips = useFilterChips();
  const {
    setSegment,
    setChannel,
    setDevice,
    setCompare,
    setDateRange,
    resetFilters,
  } = useDashboardFilters();

  if (chips.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {chips.map((chip) => (
        <div
          key={chip.key}
          className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground"
        >
          <span>{chip.label}</span>
          <button
            type="button"
            className="rounded-full text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => {
              if (chip.key === "segment") setSegment("all");
              if (chip.key === "channel") setChannel("all");
              if (chip.key === "device") setDevice("all");
              if (chip.key === "compare") setCompare(false);
              if (chip.key === "date-range") setDateRange(null, null);
            }}
          >
            <X className="size-3" />
          </button>
        </div>
      ))}

      <Button variant="ghost" size="xs" onClick={resetFilters}>
        Clear all
      </Button>
    </div>
  );
}