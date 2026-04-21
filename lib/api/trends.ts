import { apiGet } from "@/lib/api/client";
import type {
  DashboardFilters,
  TrendMetricName,
  TrendsResponse,
} from "@/types/api";

export async function getTrends(
  metricName: TrendMetricName,
  filters: DashboardFilters
): Promise<TrendsResponse> {
  return apiGet<TrendsResponse>("/trends/", {
    query: {
      metric_name: metricName,
      start_date: filters.start_date,
      end_date: filters.end_date,
      segment: filters.segment,
      channel: filters.channel,
      device: filters.device,
      compare: filters.compare,
    },
  });
}