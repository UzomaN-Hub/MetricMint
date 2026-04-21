"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { ContentShell } from "@/components/layout/content-shell";
import { SectionShell } from "@/components/shared/section-shell";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ContentShell>
      <SectionShell>
        <div className="rounded-[1.35rem] border border-dashed border-border/80 bg-card/95 p-8 shadow-[0_10px_26px_-18px_rgba(30,41,59,0.16)]">
          <p className="text-sm font-semibold text-foreground">
            Something went wrong
          </p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
            This dashboard screen could not finish loading. Try again and, if it
            still fails, we can trace the exact panel next.
          </p>

          <div className="mt-5">
            <Button onClick={reset}>Try again</Button>
          </div>
        </div>
      </SectionShell>
    </ContentShell>
  );
}