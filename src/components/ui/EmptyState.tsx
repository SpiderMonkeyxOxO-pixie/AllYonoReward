interface EmptyStateProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="card-surface flex flex-col items-center gap-2 p-10 text-center">
      <h3 className="text-lg font-semibold text-brand-green-dark">{title}</h3>
      {description && <p className="max-w-md text-sm text-brand-green-dark/70">{description}</p>}
      {action && <div className="mt-3">{action}</div>}
    </div>
  );
}
