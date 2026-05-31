import { Link } from "@tanstack/react-router";
import { Skeleton } from "@/components/ui/skeleton";
import { useOveredge } from "@/hooks/useOveredge";

type WPPost = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
};

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

function PostCardSkeleton() {
  return (
    <div className="rounded-lg bg-card p-6 shadow-sm">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="mt-4 h-6 w-3/4" />
      <Skeleton className="mt-3 h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-5/6" />
    </div>
  );
}

export default function LatestPosts() {
  const { data, loading } = useOveredge<WPPost>("posts", { per_page: 3 });

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Insights
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-primary">
              Latest Posts
            </h2>
          </div>
          <Link
            to="/blog"
            className="text-sm font-semibold text-accent hover:underline"
          >
            Read all posts →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {loading &&
            Array.from({ length: 3 }).map((_, i) => <PostCardSkeleton key={i} />)}

          {!loading && data.length === 0 && (
            <div className="md:col-span-3 rounded-lg border border-dashed border-border bg-card p-10 text-center">
              <p className="text-muted-foreground">
                No posts yet. Check back soon for updates.
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
                <h3
                  className="mt-3 text-lg font-semibold text-foreground group-hover:text-accent"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                <div
                  className="mt-3 line-clamp-3 text-sm text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
