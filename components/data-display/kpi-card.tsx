"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import type { MetricCard as MetricCardType } from "@/types/api";

export function KpiCard({
  metric,
  className,
}: {
  metric: MetricCardType;
  className?: string;
}) {
  const isPositive = (metric.comparison?.change ?? 0) >= 0;

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={cn(
        "group rounded-[1.4rem] border border-border/80 bg-card/95 p-5 shadow-[0_12px_30px_-18px_rgba(42,57,90,0.2)] transition-colors duration-200 hover:border-primary/25 hover:bg-linear-to-br hover:from-primary/6 hover:to-chart-2/8 dark:hover:from-primary/10 dark:hover:to-chart-2/10",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground/90">
            {metric.label}
          </p>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
            {metric.display_value}
          </p>
        </div>

        <div className="rounded-2xl bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
          {metric.key.replaceAll("_", " ")}
        </div>
      </div>

      {metric.comparison ? (
        <div
          className={cn(
            "mt-4 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium",
            isPositive
              ? "bg-emerald-500/12 text-emerald-700 dark:text-emerald-400"
              : "bg-rose-500/12 text-rose-700 dark:text-rose-400"
          )}
        >
          {isPositive ? (
            <TrendingUp className="size-3.5" />
          ) : (
            <TrendingDown className="size-3.5" />
          )}
          {Math.abs(metric.comparison.change_percent).toFixed(1)}%
        </div>
      ) : null}
    </motion.div>
  );
}