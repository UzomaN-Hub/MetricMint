"use client";

import { motion } from "motion/react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function WorkspaceSettingsForm() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_12px_28px_-18px_rgba(30,41,59,0.2)] transition-colors duration-200 hover:border-primary/25 hover:bg-primary/6 dark:hover:bg-primary/10"
    >
      <p className="text-sm font-semibold text-foreground">Workspace settings</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Manage the default workspace name and reporting preferences.
      </p>

      <div className="mt-5 space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Workspace name
          </label>
          <Input value="MetricMint Workspace" readOnly className="h-10 rounded-xl bg-background/70" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Default date range
          </label>
          <Input value="last_30_days" readOnly className="h-10 rounded-xl bg-background/70" />
        </div>

        <Button className="rounded-xl">Save changes</Button>
      </div>
    </motion.div>
  );
}