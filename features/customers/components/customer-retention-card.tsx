"use client";

import { motion } from "motion/react";

export function CustomerRetentionCard() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_12px_28px_-18px_rgba(30,41,59,0.2)] transition-colors duration-200 hover:border-primary/25 hover:bg-primary/6 dark:hover:bg-primary/10"
    >
      <p className="text-sm font-semibold text-foreground">Retention snapshot</p>
      <p className="mt-1 text-sm text-muted-foreground">
        A quick read on repeat engagement and returning customer behavior.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-[1rem] bg-linear-to-br from-primary/10 to-chart-2/10 p-4">
          <p className="text-xs text-muted-foreground">Returning customers</p>
          <p className="mt-2 text-2xl font-semibold text-foreground">42%</p>
        </div>
        <div className="rounded-[1rem] bg-linear-to-br from-chart-2/10 to-chart-3/10 p-4">
          <p className="text-xs text-muted-foreground">Retention trend</p>
          <p className="mt-2 text-2xl font-semibold text-foreground">+6.4%</p>
        </div>
      </div>
    </motion.div>
  );
}