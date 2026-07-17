import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center gap-4 py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="text-3xl font-bold text-brand-green-dark">Page Not Found</h1>
      <p className="max-w-md text-brand-green-dark/70">
        The page you&rsquo;re looking for may have moved or no longer exists. Try browsing the full game directory
        instead.
      </p>
      <div className="mt-2 flex flex-wrap justify-center gap-3">
        <Link href="/games" className="btn-primary">
          Browse All Games
        </Link>
        <Link href="/" className="btn-secondary-light">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
