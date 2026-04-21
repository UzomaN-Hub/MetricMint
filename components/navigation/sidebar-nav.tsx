"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { dashboardNavItems } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="space-y-1.5">
      {dashboardNavItems.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "cursor-pointer group flex items-center gap-3 rounded-[1rem] px-3 py-3 text-sm font-medium transition-all duration-200",
              isActive
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/18"
                : "text-muted-foreground hover:bg-primary/8 hover:text-foreground"
            )}
          >
            <Icon
              className={cn(
                "size-4 transition-transform duration-200",
                isActive ? "" : "group-hover:scale-105"
              )}
            />
            <span>{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}