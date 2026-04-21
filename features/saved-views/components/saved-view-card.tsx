"use client";

import { motion } from "motion/react";

import type { SavedView } from "@/types/api";

export function SavedViewCard({ item }: { item: SavedView }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_12px_28px_-18px_rgba(30,41,59,0.2)] transition-colors duration-200 hover:border-primary/25 hover:bg-primary/6 dark:hover:bg-primary/10"
    >
      <p className="text-sm font-semibold text-foreground">{item.name}</p>
      <p className="mt-2 text-sm text-muted-foreground">
        Segment: {item.filters.segment} · Channel: {item.filters.channel} · Device: {item.filters.device}
      </p>
      <p className="mt-2 inline-flex rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
        Compare: {item.filters.compare ? "Enabled" : "Disabled"}
      </p>
    </motion.div>
  );
}