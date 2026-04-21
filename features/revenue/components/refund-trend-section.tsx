"use client";

import { motion } from "motion/react";

export function RefundTrendSection() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_12px_28px_-18px_rgba(30,41,59,0.2)] transition-colors duration-200 hover:border-primary/25 hover:bg-primary/6 dark:hover:bg-primary/10"
    >
      <p className="text-sm font-semibold text-foreground">Refund trend</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Refund-specific backend data is not part of the current V1 seed model, so this section stays reserved for the next pass.
      </p>

      <div className="mt-5 rounded-[1rem] bg-muted/55 p-4">
        <div className="space-y-3">
          <div className="h-3 w-1/2 rounded-full bg-background" />
          <div className="h-3 w-4/5 rounded-full bg-background" />
          <div className="h-28 rounded-2xl bg-background" />
        </div>
      </div>
    </motion.div>
  );
}