import { ContentShell } from "@/components/layout/content-shell";
import { PageHeader } from "@/components/shared/page-header";
import { SectionShell } from "@/components/shared/section-shell";
import { PageReveal } from "@/components/shared/page-reveal";
import { Button } from "@/components/ui/button";
import { RecordDetailPanel } from "@/features/drill-down/components/record-detail-panel";

export default function RecordDetailPage() {
  return (
    <ContentShell>
      <SectionShell>
        <PageReveal>
          <PageHeader
            title="Record Detail"
            description="Inspect the selected row in more detail without losing the broader reporting context."
            actions={<Button variant="outline">Back to reports</Button>}
          />
        </PageReveal>

        <PageReveal delay={0.04}>
          <RecordDetailPanel />
        </PageReveal>
      </SectionShell>
    </ContentShell>
  );
}