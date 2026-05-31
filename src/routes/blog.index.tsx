import { createFileRoute, Link } from "@tanstack/react-router";
import { Skeleton } from "@/components/ui/skeleton";
import { useOveredge } from "@/hooks/useOveredge";

type WPPost = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
};

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: "Blog — ACC Export" },
      { name: "description", content: "Latest insights from ACC Export." },
    ],
  }),
});

function formatDate(d: string) {
  try {
    return new Date(d).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return d;
  }
}

function CardSkeleton() {
  return (
    <div className="rounded-lg bg-card p-6 shadow-sm">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="mt-4 h-6 w-3/4" />
      <Skeleton className="mt-3 h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-5/6" />
    </div>
  );
}

function BlogIndex() {
  const { data, loading } = useOveredge<WPPost>("posts", { per_page: 12 });

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Blog
        </p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-primary">
          Insights & Updates
        </h1>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {loading &&
            Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)}

          {!loading && data.length === 0 && (
            <div className="sm:col-span-2 lg:col-span-3 rounded-lg border border-dashed border-border bg-card p-12 text-center">
              <p className="text-muted-foreground">
                No posts published yet. Please check back soon.
              </p>
            </div>
          )}

          {!loading &&
            data.map((post) => (
              <Link
                key={post.id}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group rounded-lg bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {formatDate(post.date)}
                </p>
                <h2
                  className="mt-3 text-xl font-semibold text-foreground group-hover:text-accent"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                <div
                  className="mt-3 line-clamp-3 text-sm text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
                <span className="mt-4 inline-block text-sm font-semibold text-accent">
                  Read more →
                </span>
              </Link>
            ))}
        </div>

        <div className="mt-16">
          <Link to="/" className="text-sm font-semibold text-accent hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
