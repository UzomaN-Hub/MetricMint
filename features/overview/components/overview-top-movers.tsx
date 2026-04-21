"use client";

import { motion } from "motion/react";

import { formatCurrency } from "@/lib/formatters/currency";
import { PanelError } from "@/components/feedback/panel-error";
import { PanelLoading } from "@/components/feedback/panel-loading";
import { useOverviewTopMovers } from "@/features/overview/hooks/use-overview-top-movers";

export function OverviewTopMovers() {
  const { data, isLoading, isError } = useOverviewTopMovers();

  if (isLoading) {
    return <PanelLoading />;
  }

  if (isError || !data) {
    return (
      <PanelError description="The top movers section could not be loaded right now." />
    );
  }

  return (
    <div className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_10px_30px_-18px_rgba(22,28,45,0.18)]">
      <div>
        <p className="text-sm font-semibold text-foreground">Top movers</p>
        <p className="mt-1 text-sm text-muted-foreground">
          The strongest rows by revenue across the active filter scope.
        </p>
      </div>

      <div className="mt-5 space-y-3">
        {data.rows.map((row) => (
          <motion.div
            key={row.id}
            whileHover={{ y: -2 }}
            className="flex items-center justify-between rounded-[1rem] border border-transparent bg-muted/55 px-4 py-3 transition-colors duration-200 hover:border-primary/20 hover:bg-primary/6 dark:hover:bg-primary/10"
          >
            <div>
              <p className="text-sm font-medium text-foreground">
                {row.segment} · {row.channel}
              </p>
              <p className="text-xs text-muted-foreground">
                {row.device} · {row.date}
              </p>
            </div>
            <p className="text-sm font-semibold text-foreground">
              {formatCurrency(row.revenue)}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}