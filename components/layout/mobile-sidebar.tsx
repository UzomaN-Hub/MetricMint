"use client";

import Link from "next/link";
import { Menu, ChartNoAxesCombined } from "lucide-react";
import { usePathname } from "next/navigation";

import { dashboardNavItems } from "@/lib/constants/navigation";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileSidebar() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon-sm"
          aria-label="Open navigation"
          className="lg:hidden"
        >
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[290px] p-0">
        <SheetHeader className="border-b border-border/70 px-4 py-4">
          <SheetTitle asChild>
            <Link href={routes.home} className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                <ChartNoAxesCombined className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">MetricMint</p>
                <p className="text-xs text-muted-foreground">Analytics Workspace</p>
              </div>
            </Link>
          </SheetTitle>
        </SheetHeader>

        <div className="space-y-1.5 p-4">
          {dashboardNavItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "cursor-pointer flex items-center gap-3 rounded-[1rem] px-3 py-3 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/18"
                    : "text-muted-foreground hover:bg-primary/8 hover:text-foreground"
                )}
              >
                <Icon className="size-4" />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}