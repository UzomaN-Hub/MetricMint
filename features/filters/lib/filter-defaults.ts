import type {
  ChannelType,
  DeviceType,
  SegmentType,
} from "@/features/filters/types/filter-types";

export type DashboardFilterState = {
  start_date: string | null;
  end_date: string | null;
  segment: SegmentType;
  channel: ChannelType;
  device: DeviceType;
  compare: boolean;
};

export const dashboardFilterDefaults: DashboardFilterState = {
  start_date: null,
  end_date: null,
  segment: "all",
  channel: "all",
  device: "all",
  compare: false,
};