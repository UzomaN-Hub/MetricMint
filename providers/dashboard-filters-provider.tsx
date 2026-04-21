"use client";

import * as React from "react";

import {
  dashboardFilterDefaults,
  type DashboardFilterState,
} from "@/features/filters/lib/filter-defaults";
import type {
  ChannelType,
  DeviceType,
  SegmentType,
} from "@/features/filters/types/filter-types";

type DashboardFiltersContextValue = {
  filters: DashboardFilterState;
  setDateRange: (startDate: string | null, endDate: string | null) => void;
  setSegment: (segment: SegmentType) => void;
  setChannel: (channel: ChannelType) => void;
  setDevice: (device: DeviceType) => void;
  setCompare: (compare: boolean) => void;
  applySavedView: (nextFilters: DashboardFilterState) => void;
  resetFilters: () => void;
};

const DashboardFiltersContext =
  React.createContext<DashboardFiltersContextValue | null>(null);

type Action =
  | { type: "set-date-range"; payload: { startDate: string | null; endDate: string | null } }
  | { type: "set-segment"; payload: SegmentType }
  | { type: "set-channel"; payload: ChannelType }
  | { type: "set-device"; payload: DeviceType }
  | { type: "set-compare"; payload: boolean }
  | { type: "apply-saved-view"; payload: DashboardFilterState }
  | { type: "reset" };

function reducer(
  state: DashboardFilterState,
  action: Action
): DashboardFilterState {
  switch (action.type) {
    case "set-date-range":
      return {
        ...state,
        start_date: action.payload.startDate,
        end_date: action.payload.endDate,
      };
    case "set-segment":
      return { ...state, segment: action.payload };
    case "set-channel":
      return { ...state, channel: action.payload };
    case "set-device":
      return { ...state, device: action.payload };
    case "set-compare":
      return { ...state, compare: action.payload };
    case "apply-saved-view":
      return action.payload;
    case "reset":
      return dashboardFilterDefaults;
    default:
      return state;
  }
}

export function DashboardFiltersProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filters, dispatch] = React.useReducer(reducer, dashboardFilterDefaults);

  const value = React.useMemo<DashboardFiltersContextValue>(
    () => ({
      filters,
      setDateRange: (startDate, endDate) =>
        dispatch({
          type: "set-date-range",
          payload: { startDate, endDate },
        }),
      setSegment: (segment) => dispatch({ type: "set-segment", payload: segment }),
      setChannel: (channel) => dispatch({ type: "set-channel", payload: channel }),
      setDevice: (device) => dispatch({ type: "set-device", payload: device }),
      setCompare: (compare) => dispatch({ type: "set-compare", payload: compare }),
      applySavedView: (nextFilters) =>
        dispatch({ type: "apply-saved-view", payload: nextFilters }),
      resetFilters: () => dispatch({ type: "reset" }),
    }),
    [filters]
  );

  return (
    <DashboardFiltersContext.Provider value={value}>
      {children}
    </DashboardFiltersContext.Provider>
  );
}

export function useDashboardFiltersContext() {
  const context = React.useContext(DashboardFiltersContext);

  if (!context) {
    throw new Error(
      "useDashboardFiltersContext must be used inside DashboardFiltersProvider"
    );
  }

  return context;
}