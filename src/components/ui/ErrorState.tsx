interface ErrorStateProps {
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

export function ErrorState({
  title = "Something went wrong",
  description = "This content couldn't be loaded right now. Please try again shortly.",
  action,
}: ErrorStateProps) {
  return (
    <div role="alert" className="card-surface flex flex-col items-center gap-2 border-red-200 p-10 text-center">
      <h3 className="text-lg font-semibold text-brand-green-dark">{title}</h3>
      <p className="max-w-md text-sm text-brand-green-dark/70">{description}</p>
      {action && <div className="mt-3">{action}</div>}
    </div>
  );
}
