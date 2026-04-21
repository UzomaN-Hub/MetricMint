"use client";

import { motion } from "motion/react";

const exportItems = [
  {
    title: "Revenue Overview",
    meta: "CSV · Today",
  },
  {
    title: "Customer Retention Slice",
    meta: "CSV · Yesterday",
  },
];

export function ExportHistoryList() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_12px_28px_-18px_rgba(30,41,59,0.2)] transition-colors duration-200 hover:border-primary/25 hover:bg-primary/6 dark:hover:bg-primary/10"
    >
      <p className="text-sm font-semibold text-foreground">Export history</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Recent export activity appears here for reused reports.
      </p>

      <div className="mt-5 space-y-3">
        {exportItems.map((item) => (
          <div
            key={item.title}
            className="rounded-[1rem] border border-transparent bg-muted/55 px-4 py-3 transition-colors duration-200 hover:border-primary/20 hover:bg-primary/6 dark:hover:bg-primary/10"
          >
            <p className="text-sm font-medium text-foreground">{item.title}</p>
            <p className="text-xs text-muted-foreground">{item.meta}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}