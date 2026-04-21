import { ContentShell } from "@/components/layout/content-shell";
import { PageHeader } from "@/components/shared/page-header";
import { SectionShell } from "@/components/shared/section-shell";
import { PageReveal } from "@/components/shared/page-reveal";
import { Button } from "@/components/ui/button";
import { IntegrationSettingsPanel } from "@/features/settings/components/integration-settings-panel";
import { NotificationSettingsForm } from "@/features/settings/components/notification-settings-form";
import { WorkspaceSettingsForm } from "@/features/settings/components/workspace-settings-form";

export default function SettingsPage() {
  return (
    <ContentShell>
      <SectionShell>
        <PageReveal>
          <PageHeader
            title="Settings"
            description="Manage workspace preferences, notification rules, and integration defaults."
            actions={<Button>Save all</Button>}
          />
        </PageReveal>

        <div className="grid gap-4 xl:grid-cols-[1.2fr_1fr]">
          <PageReveal delay={0.03}>
            <WorkspaceSettingsForm />
          </PageReveal>
          <PageReveal delay={0.06}>
            <NotificationSettingsForm />
          </PageReveal>
        </div>

        <PageReveal delay={0.09}>
          <IntegrationSettingsPanel />
        </PageReveal>
      </SectionShell>
    </ContentShell>
  );
}