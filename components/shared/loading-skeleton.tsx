type LoadingSkeletonProps = {
  lines?: number;
  className?: string;
};

export function LoadingSkeleton({
  lines = 3,
  className = "",
}: LoadingSkeletonProps) {
  return (
    <div
      className={`rounded-[1.35rem] border border-border/70 bg-card/95 p-5 shadow-[0_10px_24px_-18px_rgba(30,41,59,0.16)] ${className}`}
    >
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className="h-4 animate-pulse rounded-lg bg-muted"
          />
        ))}
      </div>
    </div>
  );
}