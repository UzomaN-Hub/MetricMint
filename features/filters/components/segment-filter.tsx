"use client";

import { useDashboardFilters } from "@/features/filters/hooks/use-dashboard-filters";
import { segmentOptions } from "@/features/filters/lib/filter-options";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SegmentFilter() {
  const { filters, setSegment } = useDashboardFilters();

  return (
    <Select value={filters.segment} onValueChange={setSegment}>
      <SelectTrigger className="w-[170px]">
        <SelectValue placeholder="Segment" />
      </SelectTrigger>
      <SelectContent>
        {segmentOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}