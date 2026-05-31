import { createFileRoute, Link } from "@tanstack/react-router";
import { Skeleton } from "@/components/ui/skeleton";
import { useOveredge } from "@/hooks/useOveredge";

type WPMedia = { source_url: string; alt_text?: string };
type WPPost = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  _embedded?: { "wp:featuredmedia"?: WPMedia[] };
};

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPost,
});

function formatDate(d: string) {
  try {
    return new Date(d).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return d;
  }
}

function PostSkeleton() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Skeleton className="h-4 w-32" />
      <Skeleton className="mt-6 h-12 w-3/4" />
      <Skeleton className="mt-8 aspect-video w-full" />
      <div className="mt-8 space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
    </div>
  );
}

function BlogPost() {
  const { slug } = Route.useParams();
  const { data, loading } = useOveredge<WPPost>("posts", {
    slug,
    _embed: true,
  });

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <PostSkeleton />
      </main>
    );
  }

  const post = data[0];

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h1 className="text-3xl font-bold text-primary">Post not found</h1>
          <p className="mt-3 text-muted-foreground">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/blog"
            className="mt-8 inline-block text-sm font-semibold text-accent hover:underline"
          >
            ← Back to blog
          </Link>
        </div>
      </main>
    );
  }

  const featured = post._embedded?.["wp:featuredmedia"]?.[0];

  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Link
          to="/blog"
          className="text-sm font-semibold text-accent hover:underline"
        >
          ← Back to blog
        </Link>
        <p className="mt-8 text-sm uppercase tracking-widest text-muted-foreground">
          {formatDate(post.date)}
        </p>
        <h1
          className="mt-4 text-4xl font-bold tracking-tight text-primary md:text-5xl"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        {featured?.source_url && (
          <img
            src={featured.source_url}
            alt={featured.alt_text || ""}
            className="mt-10 w-full rounded-lg"
          />
        )}
        <div
          className="prose prose-neutral mt-10 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </article>
    </main>
  );
}
