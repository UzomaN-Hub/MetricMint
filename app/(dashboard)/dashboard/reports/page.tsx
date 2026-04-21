import { ContentShell } from "@/components/layout/content-shell";
import { SectionShell } from "@/components/shared/section-shell";
import { PageReveal } from "@/components/shared/page-reveal";
import { DateRangeFilter } from "@/features/filters/components/date-range-filter";
import { FilterChipBar } from "@/features/filters/components/filter-chip-bar";
import { SegmentFilter } from "@/features/filters/components/segment-filter";
import { ReportPresetsGrid } from "@/features/reports/components/report-presets-grid";
import { ReportsExportPanel } from "@/features/reports/components/reports-export-panel";
import { ReportsHeader } from "@/features/reports/components/reports-header";
import { ReportsTable } from "@/features/reports-table/components/reports-table";

export default function ReportsPage() {
  return (
    <ContentShell>
      <SectionShell>
        <PageReveal>
          <ReportsHeader />
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

        <div className="grid gap-4 xl:grid-cols-[1.5fr_1fr]">
          <PageReveal delay={0.06}>
            <ReportPresetsGrid />
          </PageReveal>
          <PageReveal delay={0.09}>
            <ReportsExportPanel />
          </PageReveal>
        </div>

        <PageReveal delay={0.12}>
          <ReportsTable />
        </PageReveal>
      </SectionShell>
    </ContentShell>
  );
}