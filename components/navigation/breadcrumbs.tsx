"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

import { dashboardNavItems } from "@/lib/constants/navigation";
import { routes } from "@/lib/constants/routes";

const labelMap: Record<string, string> = Object.fromEntries(
  dashboardNavItems.map((item) => [item.href, item.title])
);

labelMap[routes.dashboard] = "Dashboard";
labelMap[routes.savedView] = "Saved Views";
labelMap[routes.recordDetail] = "Record Detail";

function formatSegment(segment: string) {
  return segment
    .split("-")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");
}

export function Breadcrumbs() {
  const pathname = usePathname();

  if (!pathname.startsWith("/dashboard")) {
    return null;
  }

  const segments = pathname.split("/").filter(Boolean);
  const crumbs = segments.map((_, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    const label =
      labelMap[href] ??
      formatSegment(segments[index] ?? "");

    return { href, label };
  });

  return (
    <nav className="hidden items-center gap-1 text-xs text-muted-foreground md:flex">
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;

        return (
          <div key={crumb.href} className="flex items-center gap-1">
            {isLast ? (
              <span className="font-medium text-foreground">{crumb.label}</span>
            ) : (
              <Link
                href={crumb.href}
                className="transition-colors hover:text-foreground"
              >
                {crumb.label}
              </Link>
            )}
            {!isLast ? <ChevronRight className="size-3.5" /> : null}
          </div>
        );
      })}
    </nav>
  );
}