import { ContentShell } from "@/components/layout/content-shell";
import { PageHeader } from "@/components/shared/page-header";
import { SectionShell } from "@/components/shared/section-shell";
import { PageReveal } from "@/components/shared/page-reveal";
import { Button } from "@/components/ui/button";
import { CampaignPerformanceGrid } from "@/features/campaigns/components/campaign-performance-grid";
import { CampaignSourceBreakdown } from "@/features/campaigns/components/campaign-source-breakdown";
import { CampaignTable } from "@/features/campaigns/components/campaign-table";
import { DateRangeFilter } from "@/features/filters/components/date-range-filter";
import { FilterChipBar } from "@/features/filters/components/filter-chip-bar";
import { SegmentFilter } from "@/features/filters/components/segment-filter";

export default function CampaignsPage() {
  return (
    <ContentShell>
      <SectionShell>
        <PageReveal>
          <PageHeader
            title="Campaigns"
            description="Inspect campaign contribution, source breakdown, and the detailed rows behind campaign performance."
            actions={<Button>Export Campaigns</Button>}
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
          <CampaignPerformanceGrid />
        </PageReveal>

        <PageReveal delay={0.09}>
          <CampaignSourceBreakdown />
        </PageReveal>

        <PageReveal delay={0.12}>
          <CampaignTable />
        </PageReveal>
      </SectionShell>
    </ContentShell>
  );
}