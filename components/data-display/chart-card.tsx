"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

type ChartCardProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function ChartCard({
  title,
  description,
  actions,
  children,
  className,
}: ChartCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      className={cn(
        "min-w-0 rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_10px_30px_-18px_rgba(22,28,45,0.18)] transition-colors duration-200 hover:border-primary/25 hover:bg-accent/40 dark:hover:bg-accent/20",
        className
      )}
    >
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground">{title}</p>
          {description ? (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          ) : null}
        </div>
        {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
      </div>

      <div className="min-w-0">{children}</div>
    </motion.section>
  );
}