"use client";

import { Button } from "@/components/ui/button";

type ReportsTablePaginationProps = {
  page: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
};

export function ReportsTablePagination({
  page,
  totalPages,
  onPrevious,
  onNext,
}: ReportsTablePaginationProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      <p className="text-sm text-muted-foreground">
        Page {page} of {Math.max(totalPages, 1)}
      </p>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={page <= 1}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={onNext}
          disabled={page >= totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}