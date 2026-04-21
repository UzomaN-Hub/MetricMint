import { ContentShell } from "@/components/layout/content-shell";
import { PageHeader } from "@/components/shared/page-header";
import { SectionShell } from "@/components/shared/section-shell";
import { PageReveal } from "@/components/shared/page-reveal";
import { Button } from "@/components/ui/button";
import { DateRangeFilter } from "@/features/filters/components/date-range-filter";
import { FilterChipBar } from "@/features/filters/components/filter-chip-bar";
import { SavedViewSelector } from "@/features/filters/components/saved-view-selector";
import { SegmentFilter } from "@/features/filters/components/segment-filter";
import { OverviewInsightsPanel } from "@/features/overview/components/overview-insights-panel";
import { OverviewKpiStrip } from "@/features/overview/components/overview-kpi-strip";
import { OverviewTopMovers } from "@/features/overview/components/overview-top-movers";
import { OverviewTrendSection } from "@/features/overview/components/overview-trend-section";

export default function OverviewPage() {
  return (
    <ContentShell>
      <SectionShell>
        <PageReveal>
          <PageHeader
            title="Overview"
            description="Monitor top-line performance, compare periods, and move into deeper analysis without losing context."
            actions={
              <>
                <SavedViewSelector />
                <Button>Export</Button>
              </>
            }
          />
        </PageReveal>

        <PageReveal delay={0.03}>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <DateRangeFilter />
              <SegmentFilter />
            </div>
            <FilterChipBar />
          </div>
        </PageReveal>

        <PageReveal delay={0.06}>
          <OverviewKpiStrip />
        </PageReveal>

        <div className="grid gap-4 xl:grid-cols-[1.6fr_1fr]">
          <PageReveal delay={0.09}>
            <OverviewTrendSection />
          </PageReveal>
          <PageReveal delay={0.12}>
            <OverviewInsightsPanel />
          </PageReveal>
        </div>

        <PageReveal delay={0.15}>
          <OverviewTopMovers />
        </PageReveal>
      </SectionShell>
    </ContentShell>
  );
}