"use client";

import * as React from "react";
import { useQuery } from "@tanstack/react-query";

import { getReports } from "@/lib/api/reports";
import { useDashboardFilters } from "@/features/filters/hooks/use-dashboard-filters";
import type { ReportSortField, SortOrder } from "@/types/api";

export function useReportsTable() {
  const { filters } = useDashboardFilters();

  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [sortBy, setSortBy] = React.useState<ReportSortField>("date");
  const [sortOrder, setSortOrder] = React.useState<SortOrder>("desc");

  const query = useQuery({
    queryKey: ["reports", filters, search, page, sortBy, sortOrder],
    queryFn: () =>
      getReports({
        filters,
        search,
        page,
        pageSize: 10,
        sortBy,
        sortOrder,
      }),
  });

  React.useEffect(() => {
    setPage(1);
  }, [search, filters]);

  return {
    ...query,
    search,
    setSearch,
    page,
    setPage,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
  };
}