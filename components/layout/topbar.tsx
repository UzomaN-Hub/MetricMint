import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { TopNavActions } from "@/components/navigation/top-nav-actions";
import { MobileSidebar } from "@/components/layout/mobile-sidebar";

export function Topbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/72 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.4rem] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <MobileSidebar />
          <div>
            <p className="text-sm font-semibold text-foreground">MetricMint</p>
            <p className="text-xs text-muted-foreground">
              Revenue, product, and customer analytics
            </p>
          </div>
        </div>

        <div className="hidden flex-1 px-6 lg:block">
          <Breadcrumbs />
        </div>

        <TopNavActions />
      </div>
    </header>
  );
}