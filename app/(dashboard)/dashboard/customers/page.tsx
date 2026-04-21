import { ContentShell } from "@/components/layout/content-shell";
import { PageHeader } from "@/components/shared/page-header";
import { SectionShell } from "@/components/shared/section-shell";
import { PageReveal } from "@/components/shared/page-reveal";
import { Button } from "@/components/ui/button";
import { DateRangeFilter } from "@/features/filters/components/date-range-filter";
import { FilterChipBar } from "@/features/filters/components/filter-chip-bar";
import { SegmentFilter } from "@/features/filters/components/segment-filter";
import { CustomerDeviceBreakdown } from "@/features/customers/components/customer-device-breakdown";
import { CustomerList } from "@/features/customers/components/customer-list";
import { CustomerRetentionCard } from "@/features/customers/components/customer-retention-card";

export default function CustomersPage() {
  return (
    <ContentShell>
      <SectionShell>
        <PageReveal>
          <PageHeader
            title="Customers"
            description="Inspect returning behavior, device distribution, and the rows behind customer activity."
            actions={<Button>Export Customers</Button>}
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

        <div className="grid gap-4 xl:grid-cols-[1fr_1.4fr]">
          <PageReveal delay={0.06}>
            <CustomerRetentionCard />
          </PageReveal>
          <PageReveal delay={0.09}>
            <CustomerDeviceBreakdown />
          </PageReveal>
        </div>

        <PageReveal delay={0.12}>
          <CustomerList />
        </PageReveal>
      </SectionShell>
    </ContentShell>
  );
}