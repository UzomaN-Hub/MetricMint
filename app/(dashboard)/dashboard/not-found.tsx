import Link from "next/link";

import { ContentShell } from "@/components/layout/content-shell";
import { SectionShell } from "@/components/shared/section-shell";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/constants/routes";

export default function DashboardNotFound() {
  return (
    <ContentShell>
      <SectionShell>
        <div className="rounded-[1.35rem] border border-dashed border-border/80 bg-card/95 p-8 shadow-[0_10px_26px_-18px_rgba(30,41,59,0.16)]">
          <p className="text-sm font-semibold text-foreground">Page not found</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
            The dashboard page you tried to open does not exist or may have been moved.
          </p>

          <div className="mt-5 flex items-center gap-3">
            <Link href={routes.overview}>
              <Button>Back to overview</Button>
            </Link>
            <Link href={routes.reports}>
              <Button variant="outline">Open reports</Button>
            </Link>
          </div>
        </div>
      </SectionShell>
    </ContentShell>
  );
}