import { createFileRoute, Navigate } from "@tanstack/react-router";
import { Skeleton } from "@/components/ui/skeleton";
import { useOveredge } from "@/hooks/useOveredge";

type WPPage = {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
};

export const Route = createFileRoute("/$slug")({
  component: WordPressPage,
});

function PageSkeleton() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <Skeleton className="h-12 w-3/4" />
      <div className="mt-8 space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
    </div>
  );
}

function WordPressPage() {
  const { slug } = Route.useParams();
  const { data: pages, loading } = useOveredge<WPPage>("pages");

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <PageSkeleton />
      </main>
    );
  }

  const page = pages.find((p) => p.slug === slug);

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-3xl px-4 py-16">
        <h1
          className="mb-8 text-4xl font-bold text-primary"
          dangerouslySetInnerHTML={{ __html: page.title.rendered }}
        />
        <div
          className="prose prose-neutral max-w-none"
          dangerouslySetInnerHTML={{ __html: page.content.rendered }}
        />
      </div>
    </main>
  );
}
