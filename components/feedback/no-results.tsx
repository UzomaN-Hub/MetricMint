import { EmptyState } from "@/components/shared/empty-state";

export function NoResults() {
  return (
    <EmptyState
      title="No matching results"
      description="Try adjusting your filters, search term, or date range to widen the result set."
    />
  );
}