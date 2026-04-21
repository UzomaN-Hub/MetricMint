"use client";

import { motion } from "motion/react";

const items = [
  { label: "Campaign revenue", value: "$68,950", tone: "from-primary/10 to-chart-2/10" },
  { label: "Attributed orders", value: "362", tone: "from-chart-2/10 to-chart-3/10" },
  { label: "ROAS signal", value: "4.2x", tone: "from-chart-3/10 to-chart-4/10" },
  { label: "Best channel", value: "Paid", tone: "from-chart-4/10 to-chart-5/10" },
];

export function CampaignPerformanceGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24, delay: index * 0.04 }}
          whileHover={{ y: -3, scale: 1.01 }}
          className={`rounded-[1.35rem] border border-border/80 bg-linear-to-br ${item.tone} p-5 shadow-[0_12px_28px_-18px_rgba(30,41,59,0.2)]`}
        >
          <p className="text-sm text-muted-foreground">{item.label}</p>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
            {item.value}
          </p>
        </motion.div>
      ))}
    </div>
  );
}