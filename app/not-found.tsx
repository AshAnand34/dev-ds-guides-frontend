import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)] transition-colors">
      <div className="text-center max-w-md p-8">
        <h1 className="text-7xl font-bold text-[var(--text-primary)] mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">Page Not Found</h2>
        <p className="text-lg text-[var(--text-secondary)] mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="inline-block bg-[var(--accent-color)] text-white px-6 py-3 rounded-lg font-semibold transition hover:bg-[var(--accent-hover)]"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
} 