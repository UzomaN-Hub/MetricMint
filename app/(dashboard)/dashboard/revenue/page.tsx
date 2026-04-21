import { ContentShell } from "@/components/layout/content-shell";
import { PageHeader } from "@/components/shared/page-header";
import { SectionShell } from "@/components/shared/section-shell";
import { PageReveal } from "@/components/shared/page-reveal";
import { Button } from "@/components/ui/button";
import { DateRangeFilter } from "@/features/filters/components/date-range-filter";
import { FilterChipBar } from "@/features/filters/components/filter-chip-bar";
import { SegmentFilter } from "@/features/filters/components/segment-filter";
import { ChannelBreakdownSection } from "@/features/revenue/components/channel-breakdown-section";
import { RefundTrendSection } from "@/features/revenue/components/refund-trend-section";
import { RevenueTrendSection } from "@/features/revenue/components/revenue-trend-section";
import { ReportsTable } from "@/features/reports-table/components/reports-table";

export default function RevenuePage() {
  return (
    <ContentShell>
      <SectionShell>
        <PageReveal>
          <PageHeader
            title="Revenue"
            description="Inspect revenue movement, channel contribution, and the rows driving performance."
            actions={<Button>Export Report</Button>}
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

        <div className="grid gap-4 xl:grid-cols-[1.6fr_1fr]">
          <PageReveal delay={0.06}>
            <RevenueTrendSection />
          </PageReveal>
          <PageReveal delay={0.09}>
            <RefundTrendSection />
          </PageReveal>
        </div>

        <PageReveal delay={0.12}>
          <ChannelBreakdownSection />
        </PageReveal>

        <PageReveal delay={0.15}>
          <ReportsTable />
        </PageReveal>
      </SectionShell>
    </ContentShell>
  );
}