import { apiGet } from "@/lib/api/client";
import type {
  BreakdownMetricName,
  BreakdownsResponse,
  DashboardFilters,
} from "@/types/api";

export async function getBreakdowns(
  metricName: BreakdownMetricName,
  filters: DashboardFilters
): Promise<BreakdownsResponse> {
  return apiGet<BreakdownsResponse>("/breakdowns/", {
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