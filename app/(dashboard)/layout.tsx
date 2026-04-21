import type { ReactNode } from "react";

import { DashboardShell } from "@/components/layout/dashboard-shell";
import { DashboardFiltersProvider } from "@/providers/dashboard-filters-provider";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <DashboardFiltersProvider>
      <DashboardShell>{children}</DashboardShell>
    </DashboardFiltersProvider>
  );
}