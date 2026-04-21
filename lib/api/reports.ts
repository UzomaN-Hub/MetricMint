import { apiGet } from "@/lib/api/client";
import type {
  DashboardFilters,
  ReportsResponse,
  ReportSortField,
  SortOrder,
} from "@/types/api";

type ReportsQueryOptions = {
  filters: DashboardFilters;
  search?: string;
  sortBy?: ReportSortField;
  sortOrder?: SortOrder;
  page?: number;
  pageSize?: number;
};

export async function getReports({
  filters,
  search,
  sortBy = "date",
  sortOrder = "desc",
  page = 1,
  pageSize = 10,
}: ReportsQueryOptions): Promise<ReportsResponse> {
  return apiGet<ReportsResponse>("/reports/", {
    query: {
      start_date: filters.start_date,
      end_date: filters.end_date,
      segment: filters.segment,
      channel: filters.channel,
      device: filters.device,
      compare: filters.compare,
      search,
      sort_by: sortBy,
      sort_order: sortOrder,
      page,
      page_size: pageSize,
    },
  });
}