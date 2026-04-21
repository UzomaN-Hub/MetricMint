"use client";

import { motion } from "motion/react";

const items = [
  {
    title: "Revenue Overview",
    description:
      "Monitor top-line movement with comparison enabled and a broad date range.",
  },
  {
    title: "Mobile Campaign Check",
    description:
      "Review paid mobile activity and isolate campaign-related performance.",
  },
  {
    title: "Customer Retention Slice",
    description:
      "Focus on organic desktop traffic with compare mode enabled.",
  },
];

export function ReportPresetsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24, delay: index * 0.04 }}
          whileHover={{ y: -3 }}
          className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_12px_28px_-18px_rgba(30,41,59,0.2)] transition-colors duration-200 hover:border-primary/25 hover:bg-primary/6 dark:hover:bg-primary/10"
        >
          <p className="text-sm font-semibold text-foreground">{item.title}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}