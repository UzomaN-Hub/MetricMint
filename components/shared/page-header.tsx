import * as React from "react";

import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
};

export function PageHeader({
  title,
  description,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-[1.35rem] border border-border/70 bg-card/75 px-5 py-5 shadow-[0_10px_24px_-18px_rgba(30,41,59,0.18)] sm:flex-row sm:items-start sm:justify-between",
        className
      )}
    >
      <div className="space-y-1.5">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h1>
        {description ? (
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>

      {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
    </div>
  );
}