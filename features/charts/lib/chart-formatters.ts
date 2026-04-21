import type { TrendPoint } from "@/types/api";
import type { TrendSeriesPoint } from "@/features/charts/types/chart-types";

export function buildTrendSeries(
  points: TrendPoint[],
  comparisonPoints?: TrendPoint[] | null
): TrendSeriesPoint[] {
  return points.map((point, index) => ({
    date: point.date,
    value: point.value,
    comparison: comparisonPoints?.[index]?.value ?? null,
  }));
}