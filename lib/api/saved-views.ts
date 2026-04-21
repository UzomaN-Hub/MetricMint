import { apiGet } from "@/lib/api/client";
import type { SavedViewsResponse } from "@/types/api";

export async function getSavedViews(): Promise<SavedViewsResponse> {
  return apiGet<SavedViewsResponse>("/saved-views/");
}