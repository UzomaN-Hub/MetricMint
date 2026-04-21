"use client";

import { motion } from "motion/react";

export function NotificationSettingsForm() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_12px_28px_-18px_rgba(30,41,59,0.2)] transition-colors duration-200 hover:border-primary/25 hover:bg-primary/6 dark:hover:bg-primary/10"
    >
      <p className="text-sm font-semibold text-foreground">Notifications</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Configure alerting and regular summary behavior.
      </p>

      <div className="mt-5 space-y-3">
        <div className="rounded-[1rem] bg-muted/55 px-4 py-3">
          <p className="text-sm font-medium text-foreground">Email alerts</p>
          <p className="text-xs text-muted-foreground">Enabled</p>
        </div>

        <div className="rounded-[1rem] bg-muted/55 px-4 py-3">
          <p className="text-sm font-medium text-foreground">Weekly summary</p>
          <p className="text-xs text-muted-foreground">Disabled</p>
        </div>
      </div>
    </motion.div>
  );
}