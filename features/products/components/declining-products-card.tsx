"use client";

import { motion } from "motion/react";

export function DecliningProductsCard() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_12px_28px_-18px_rgba(30,41,59,0.2)] transition-colors duration-200 hover:border-amber-400/30 hover:bg-amber-500/6 dark:hover:bg-amber-500/10"
    >
      <p className="text-sm font-semibold text-foreground">Declining products</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Products needing closer attention before the next reporting cycle.
      </p>

      <div className="mt-5 space-y-3">
        <div className="rounded-[1rem] border border-transparent bg-muted/55 px-4 py-3 transition-colors hover:border-amber-400/20 hover:bg-amber-500/6 dark:hover:bg-amber-500/10">
          <p className="text-sm font-medium text-foreground">Starter Add-on</p>
          <p className="text-xs text-amber-700 dark:text-amber-400">
            -4.2% vs previous period
          </p>
        </div>
        <div className="rounded-[1rem] border border-transparent bg-muted/55 px-4 py-3 transition-colors hover:border-amber-400/20 hover:bg-amber-500/6 dark:hover:bg-amber-500/10">
          <p className="text-sm font-medium text-foreground">Legacy Package</p>
          <p className="text-xs text-amber-700 dark:text-amber-400">
            -6.1% vs previous period
          </p>
        </div>
      </div>
    </motion.div>
  );
}