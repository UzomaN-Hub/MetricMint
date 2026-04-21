"use client";

import { CalendarRange } from "lucide-react";

import { useDashboardFilters } from "@/features/filters/hooks/use-dashboard-filters";
import { Input } from "@/components/ui/input";

export function DateRangeFilter() {
  const { filters, setDateRange } = useDashboardFilters();

  return (
    <div className="flex items-center gap-2 rounded-xl border bg-card px-3 py-2">
      <CalendarRange className="size-4 text-muted-foreground" />
      <Input
        type="date"
        value={filters.start_date ?? ""}
        onChange={(event) =>
          setDateRange(event.target.value || null, filters.end_date)
        }
        className="h-8 w-[145px] border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
      />
      <span className="text-xs text-muted-foreground">to</span>
      <Input
        type="date"
        value={filters.end_date ?? ""}
        onChange={(event) =>
          setDateRange(filters.start_date, event.target.value || null)
        }
        className="h-8 w-[145px] border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
      />
    </div>
  );
}