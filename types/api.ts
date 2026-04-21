export type SegmentType =
  | "all"
  | "revenue"
  | "customers"
  | "products"
  | "campaigns";

export type ChannelType =
  | "all"
  | "organic"
  | "paid"
  | "email"
  | "social"
  | "direct";

export type DeviceType = "all" | "desktop" | "mobile" | "tablet";

export type DashboardFilters = {
  start_date: string | null;
  end_date: string | null;
  segment: SegmentType;
  channel: ChannelType;
  device: DeviceType;
  compare: boolean;
};

export type ComparisonValue = {
  value: number;
  change: number;
  change_percent: number;
};

export type MetricCard = {
  key: string;
  label: string;
  value: number;
  display_value: string;
  comparison: ComparisonValue | null;
};

export type MetricsResponse = {
  filters: DashboardFilters;
  metrics: MetricCard[];
};

export type TrendMetricName = "revenue" | "orders" | "conversion_rate";

export type TrendPoint = {
  date: string;
  value: number;
};

export type TrendsResponse = {
  metric_name: TrendMetricName;
  filters: DashboardFilters;
  points: TrendPoint[];
  comparison_points: TrendPoint[] | null;
};

export type BreakdownMetricName =
  | "revenue_by_channel"
  | "orders_by_segment"
  | "customers_by_device";

export type BreakdownItem = {
  label: string;
  value: number;
  percentage: number;
};

export type BreakdownsResponse = {
  metric_name: BreakdownMetricName;
  filters: DashboardFilters;
  items: BreakdownItem[];
};

export type ReportSortField =
  | "date"
  | "segment"
  | "channel"
  | "device"
  | "revenue"
  | "orders"
  | "conversion_rate";

export type SortOrder = "asc" | "desc";

export type ReportRow = {
  id: string;
  date: string;
  segment: string;
  channel: string;
  device: string;
  revenue: number;
  orders: number;
  conversion_rate: number;
};

export type ReportsResponse = {
  filters: DashboardFilters;
  search: string | null;
  sort_by: ReportSortField;
  sort_order: SortOrder;
  page: number;
  page_size: number;
  total: number;
  total_pages: number;
  rows: ReportRow[];
};

export type SavedView = {
  id: string;
  name: string;
  filters: DashboardFilters;
};

export type SavedViewsResponse = {
  items: SavedView[];
  total: number;
};