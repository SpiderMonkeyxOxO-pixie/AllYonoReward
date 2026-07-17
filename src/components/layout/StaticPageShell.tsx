import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LastUpdated } from "@/components/ui/LastUpdated";

interface StaticPageShellProps {
  title: string;
  crumbName: string;
  crumbPath: string;
  intro?: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function StaticPageShell({ title, crumbName, crumbPath, intro, lastUpdated, children }: StaticPageShellProps) {
  return (
    <div className="container-page py-10">
      <Breadcrumbs items={[{ name: crumbName, path: crumbPath }]} />
      <h1 className="mb-3 mt-4 text-3xl font-bold text-brand-green-dark">{title}</h1>
      <LastUpdated lastUpdated={lastUpdated} className="mb-6 text-xs text-brand-green-dark/50" />
      {intro && <p className="mb-8 max-w-3xl text-brand-green-dark/80">{intro}</p>}
      <div className="max-w-3xl space-y-8 text-brand-green-dark/80 [&_h2]:mb-2 [&_h2]:mt-2 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-brand-green-dark [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_p]:leading-relaxed">
        {children}
      </div>
    </div>
  );
}
