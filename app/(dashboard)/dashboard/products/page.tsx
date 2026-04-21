import { ContentShell } from "@/components/layout/content-shell";
import { PageHeader } from "@/components/shared/page-header";
import { SectionShell } from "@/components/shared/section-shell";
import { PageReveal } from "@/components/shared/page-reveal";
import { Button } from "@/components/ui/button";
import { DateRangeFilter } from "@/features/filters/components/date-range-filter";
import { FilterChipBar } from "@/features/filters/components/filter-chip-bar";
import { SegmentFilter } from "@/features/filters/components/segment-filter";
import { DecliningProductsCard } from "@/features/products/components/declining-products-card";
import { ProductPerformanceTable } from "@/features/products/components/product-performance-table";
import { TopProductsCard } from "@/features/products/components/top-products-card";

export default function ProductsPage() {
  return (
    <ContentShell>
      <SectionShell>
        <PageReveal>
          <PageHeader
            title="Products"
            description="Review strongest products, weaker movement, and product-related rows in one workspace."
            actions={<Button>Export Products</Button>}
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

        <div className="grid gap-4 xl:grid-cols-2">
          <PageReveal delay={0.06}>
            <TopProductsCard />
          </PageReveal>
          <PageReveal delay={0.09}>
            <DecliningProductsCard />
          </PageReveal>
        </div>

        <PageReveal delay={0.12}>
          <ProductPerformanceTable />
        </PageReveal>
      </SectionShell>
    </ContentShell>
  );
}