export type ChartSeriesPoint = {
  label: string;
  value: number;
};

export type TrendSeriesPoint = {
  date: string;
  value: number;
  comparison?: number | null;
};