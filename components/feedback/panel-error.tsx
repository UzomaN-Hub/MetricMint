import { ErrorState } from "@/components/shared/error-state";

export function PanelError({ description }: { description: string }) {
  return (
    <ErrorState
      title="Unable to load panel"
      description={description}
    />
  );
}