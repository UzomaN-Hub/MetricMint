"use client";

import { AlertTriangle, ArrowUpRight, TrendingDown, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export function OverviewInsightsPanel() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_12px_28px_-18px_rgba(30,41,59,0.2)] transition-colors duration-200 hover:border-primary/25 hover:bg-primary/6 dark:hover:bg-primary/10"
    >
      <div>
        <p className="text-sm font-semibold text-foreground">Insights and alerts</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Quick signals to help you know where to inspect next.
        </p>
      </div>

      <div className="mt-5 space-y-3">
        <div className="rounded-[1rem] border border-transparent bg-emerald-500/8 p-4 transition-colors hover:border-emerald-500/20">
          <div className="flex items-start gap-3">
            <TrendingUp className="mt-0.5 size-4 text-emerald-500" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Revenue is trending up
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Revenue is outperforming the previous period, with stronger movement in the most recent days.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[1rem] border border-transparent bg-amber-500/8 p-4 transition-colors hover:border-amber-400/20">
          <div className="flex items-start gap-3">
            <TrendingDown className="mt-0.5 size-4 text-amber-500" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Watch conversion consistency
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Traffic and order movement look healthy, but conversion still needs closer monitoring by segment.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[1rem] border border-transparent bg-rose-500/8 p-4 transition-colors hover:border-rose-400/20">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 size-4 text-rose-500" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Drill into campaign performance
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Campaign-linked rows should be reviewed next to confirm which sources are driving stronger returns.
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
      >
        Open deeper report
        <ArrowUpRight className="size-4" />
      </button>
    </motion.div>
  );
}