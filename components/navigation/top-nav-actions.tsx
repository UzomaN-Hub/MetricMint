"use client";

import { Bell, Download, Search } from "lucide-react";
import { motion } from "motion/react";

import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function TopNavActions() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative hidden w-72 xl:block">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search reports, channels, products..."
          className="h-10 rounded-xl border-border/70 bg-background/70 pl-9"
        />
      </div>

      <motion.div whileHover={{ y: -1 }}>
        <Button variant="outline" size="icon-sm" aria-label="Notifications">
          <Bell className="size-4" />
        </Button>
      </motion.div>

      <motion.div whileHover={{ y: -1 }}>
        <Button variant="outline" size="icon-sm" aria-label="Export current view">
          <Download className="size-4" />
        </Button>
      </motion.div>

      <ThemeToggle />

      <motion.div whileHover={{ y: -1 }}>
        <div className="hidden sm:block">
          <Avatar className="size-8">
            <AvatarFallback>MM</AvatarFallback>
          </Avatar>
        </div>
      </motion.div>
    </div>
  );
}