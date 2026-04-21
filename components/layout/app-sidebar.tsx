import Link from "next/link";
import { ChartNoAxesCombined } from "lucide-react";

import { SidebarNav } from "@/components/navigation/sidebar-nav";
import { routes } from "@/lib/constants/routes";

export function AppSidebar() {
  return (
    <aside className="hidden h-screen w-76 shrink-0 border-r border-sidebar-border/80 bg-sidebar/90 backdrop-blur-xl lg:block">
      <div className="flex h-full flex-col px-4 py-5">
        <Link
          href={routes.home}
          className="relative overflow-hidden rounded-[1.4rem] border border-sidebar-border/80 bg-card/80 px-3 py-3"
        >
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/12 via-transparent to-chart-2/10" />
          <div className="relative flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <ChartNoAxesCombined className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-sidebar-foreground">
                MetricMint
              </p>
              <p className="text-xs text-muted-foreground">Analytics Workspace</p>
            </div>
          </div>
        </Link>

        <div className="mt-6 flex-1">
          <SidebarNav />
        </div>

        <div className="rounded-[1.2rem] border border-sidebar-border/80 bg-card/70 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Daily brief
          </p>
          <p className="mt-2 text-sm font-medium text-foreground">
            Revenue is up, but conversion still needs closer inspection.
          </p>
          <p className="mt-2 text-xs leading-5 text-muted-foreground">
            Use the Overview filters to narrow by segment and confirm what changed.
          </p>
        </div>
      </div>
    </aside>
  );
}