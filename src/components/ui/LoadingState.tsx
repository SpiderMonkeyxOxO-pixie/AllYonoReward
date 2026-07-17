export function LoadingState({ label = "Loading content…" }: { label?: string }) {
  return (
    <div role="status" className="flex flex-col gap-4 p-6">
      <span className="sr-only">{label}</span>
      {[...Array(3)].map((_, i) => (
        <div key={i} className="h-24 animate-pulse rounded-2xl bg-black/5" aria-hidden="true" />
      ))}
    </div>
  );
}
