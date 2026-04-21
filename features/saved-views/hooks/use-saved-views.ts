"use client";

import { useQuery } from "@tanstack/react-query";

import { getSavedViews } from "@/lib/api/saved-views";

export function useSavedViews() {
  return useQuery({
    queryKey: ["saved-views"],
    queryFn: getSavedViews,
  });
}