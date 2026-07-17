import { cn } from "@/lib/utils";

interface DisclaimerBoxProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function DisclaimerBox({ title = "Informational disclaimer", children, className }: DisclaimerBoxProps) {
  return (
    <div
      role="note"
      aria-label={title}
      className={cn(
        "rounded-xl2 border border-amber-300/60 bg-amber-50 p-4 text-sm text-amber-900 sm:p-5",
        className
      )}
    >
      <p className="mb-1 font-semibold">{title}</p>
      <div className="text-amber-900/90">{children}</div>
    </div>
  );
}
