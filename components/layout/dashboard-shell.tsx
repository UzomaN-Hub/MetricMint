import * as React from "react";

import { AppSidebar } from "@/components/layout/app-sidebar";
import { Topbar } from "@/components/layout/topbar";

export function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-screen min-w-0">
        <AppSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar />
          {children}
        </div>
      </div>
    </div>
  );
}