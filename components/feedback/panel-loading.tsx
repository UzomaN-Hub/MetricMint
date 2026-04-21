import { LoadingSkeleton } from "@/components/shared/loading-skeleton";

export function PanelLoading() {
  return <LoadingSkeleton lines={6} className="min-h-[220px]" />;
}