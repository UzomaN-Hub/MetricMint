"use client";

import * as React from "react";

import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/providers/query-provider";
import { ThemeProvider } from "@/providers/theme-provider";

export function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <QueryProvider>
        <TooltipProvider delayDuration={150}>{children}</TooltipProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}