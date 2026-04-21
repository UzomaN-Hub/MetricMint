"use client";

import { motion } from "motion/react";

export function RecordDetailSummary() {
  const items = [
    { label: "Revenue", value: "$10,350", tone: "from-primary/10 to-chart-2/10" },
    { label: "Orders", value: "60", tone: "from-chart-2/10 to-chart-3/10" },
    { label: "Channel", value: "Social", tone: "from-chart-3/10 to-chart-4/10" },
    { label: "Device", value: "Mobile", tone: "from-chart-4/10 to-chart-5/10" },
  ];

  return (
    <div className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_12px_28px_-18px_rgba(30,41,59,0.2)]">
      <p className="text-sm font-semibold text-foreground">Record summary</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Quick detail context for the selected row or segment.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24, delay: index * 0.04 }}
            whileHover={{ y: -3 }}
            className={`rounded-[1rem] bg-linear-to-br ${item.tone} p-4`}
          >
            <p className="text-xs text-muted-foreground">{item.label}</p>
            <p className="mt-2 text-xl font-semibold text-foreground">{item.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}