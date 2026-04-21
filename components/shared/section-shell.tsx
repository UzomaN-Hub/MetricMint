import * as React from "react";

import { cn } from "@/lib/utils";

export function SectionShell({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <section className={cn("space-y-6", className)}>{children}</section>;
}