"use client";

import { ContentShell } from "@/components/layout/content-shell";
import { PageHeader } from "@/components/shared/page-header";
import { SectionShell } from "@/components/shared/section-shell";
import { PageReveal } from "@/components/shared/page-reveal";
import { ExportHistoryList } from "@/features/saved-views/components/export-history-list";
import { SaveViewDialog } from "@/features/saved-views/components/save-view-dialog";
import { SavedViewCard } from "@/features/saved-views/components/saved-view-card";
import { useSavedViews } from "@/features/saved-views/hooks/use-saved-views";

export default function SavedViewPage() {
  const { data, isLoading, isError } = useSavedViews();

  return (
    <ContentShell>
      <SectionShell>
        <PageReveal>
          <PageHeader
            title="Saved Views"
            description="Reuse common filter states and preserve recurring reporting workflows."
            actions={<SaveViewDialog />}
          />
        </PageReveal>

        <PageReveal delay={0.03}>
          {isLoading ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="h-[156px] animate-pulse rounded-2xl border bg-card"
                />
              ))}
            </div>
          ) : isError || !data ? (
            <div className="rounded-2xl border border-dashed bg-card p-5 text-sm text-muted-foreground">
              Unable to load saved views right now.
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {data.items.map((item) => (
                <SavedViewCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </PageReveal>

        <PageReveal delay={0.06}>
          <ExportHistoryList />
        </PageReveal>
      </SectionShell>
    </ContentShell>
  );
}