import { apiGet } from "@/lib/api/client";
import type { DashboardFilters, MetricsResponse } from "@/types/api";

export async function getMetrics(filters: DashboardFilters): Promise<MetricsResponse> {
  return apiGet<MetricsResponse>("/metrics/", {
    query: {
      start_date: filters.start_date,
      end_date: filters.end_date,
      segment: filters.segment,
      channel: filters.channel,
      device: filters.device,
      compare: filters.compare,
    },
  });
}