import { Inbox } from "lucide-react";

type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-[1.35rem] border border-dashed border-border/80 bg-card/95 p-8 text-center shadow-[0_10px_26px_-18px_rgba(30,41,59,0.16)]">
      <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Inbox className="size-5" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}