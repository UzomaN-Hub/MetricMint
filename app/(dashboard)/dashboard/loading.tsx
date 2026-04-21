import { ContentShell } from "@/components/layout/content-shell";
import { SectionShell } from "@/components/shared/section-shell";

export default function DashboardLoading() {
  return (
    <ContentShell>
      <SectionShell>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-[138px] animate-pulse rounded-[1.35rem] border border-border/70 bg-card/95 shadow-[0_10px_24px_-18px_rgba(30,41,59,0.16)]"
            />
          ))}
        </div>

        <div className="grid gap-4 xl:grid-cols-[1.6fr_1fr]">
          <div className="h-[320px] animate-pulse rounded-[1.35rem] border border-border/70 bg-card/95 shadow-[0_10px_24px_-18px_rgba(30,41,59,0.16)]" />
          <div className="h-[320px] animate-pulse rounded-[1.35rem] border border-border/70 bg-card/95 shadow-[0_10px_24px_-18px_rgba(30,41,59,0.16)]" />
        </div>

        <div className="h-[420px] animate-pulse rounded-[1.35rem] border border-border/70 bg-card/95 shadow-[0_10px_24px_-18px_rgba(30,41,59,0.16)]" />
      </SectionShell>
    </ContentShell>
  );
}