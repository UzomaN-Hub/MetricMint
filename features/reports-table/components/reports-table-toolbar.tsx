"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type ReportsTableToolbarProps = {
  search: string;
  onSearchChange: (value: string) => void;
  onReset: () => void;
};

export function ReportsTableToolbar({
  search,
  onSearchChange,
  onReset,
}: ReportsTableToolbarProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full max-w-sm">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search segment, channel, device..."
          className="h-10 rounded-xl border-border/70 bg-background/70 pl-9"
        />
      </div>

      <Button variant="outline" className="rounded-xl" onClick={onReset}>
        Reset search
      </Button>
    </div>
  );
}