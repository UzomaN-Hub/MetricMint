import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/page-header";
import { SavedViewSelector } from "@/features/filters/components/saved-view-selector";

export function ReportsHeader() {
  return (
    <PageHeader
      title="Reports"
      description="Work with saved views, export data, and inspect reusable reporting configurations."
      actions={
        <>
          <SavedViewSelector />
          <Button>Export</Button>
        </>
      }
    />
  );
}