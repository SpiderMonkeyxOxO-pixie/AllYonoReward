import { cn } from "@/lib/utils";

export interface InfoRow {
  label: string;
  value: React.ReactNode;
}

interface InfoTableProps {
  rows: InfoRow[];
  caption?: string;
}

// A definition list styled to read as a two-column table at sm+ and as
// stacked label/value pairs on mobile — avoids CSS display:table hacks that
// can strip table semantics for assistive tech at narrow widths.
export function InfoTable({ rows, caption }: InfoTableProps) {
  return (
    <dl className="card-surface divide-y divide-black/5 overflow-hidden">
      {caption && <span className="sr-only">{caption}</span>}
      {rows.map((row, index) => (
        <div
          key={row.label}
          className={cn(
            "flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-baseline sm:gap-4 sm:px-5",
            index % 2 === 0 ? "bg-white" : "bg-base-50"
          )}
        >
          <dt className="text-sm font-semibold text-brand-green-dark sm:w-2/5 sm:shrink-0">{row.label}</dt>
          <dd className="text-sm text-brand-green-dark/80">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
