import * as React from "react";

import { cn } from "@/lib/utils";

export function ContentShell({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <main
      className={cn(
        "min-w-0 flex-1 overflow-x-hidden px-4 py-6 sm:px-6 lg:px-8 lg:py-8",
        className
      )}
    >
      <div className="mx-auto w-full max-w-7xl min-w-0">{children}</div>
    </main>
  );
}