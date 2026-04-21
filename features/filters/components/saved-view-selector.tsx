"use client";

import { useQuery } from "@tanstack/react-query";

import { getSavedViews } from "@/lib/api/saved-views";
import { useDashboardFilters } from "@/features/filters/hooks/use-dashboard-filters";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SavedViewSelector() {
  const { applySavedView } = useDashboardFilters();

  const { data } = useQuery({
    queryKey: ["saved-views"],
    queryFn: getSavedViews,
  });

  return (
    <Select
      onValueChange={(value) => {
        const selected = data?.items.find((item) => item.id === value);
        if (!selected) return;
        applySavedView(selected.filters);
      }}
    >
      <SelectTrigger className="w-[190px]">
        <SelectValue placeholder="Saved views" />
      </SelectTrigger>
      <SelectContent>
        {data?.items.map((item) => (
          <SelectItem key={item.id} value={item.id}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}