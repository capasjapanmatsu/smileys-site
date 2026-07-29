import { useParams, Link } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import { FadeInSection } from "../components/FadeInSection";
import { getBlogPostBySlug } from "../content/blog";
import { ChevronLeft } from "lucide-react";
import { APP_ROUTE_PATHS } from "../routePaths";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <PageLayout
        title="記事が見つかりません | Smiley's Kennel"
        description="お探しの記事が見つかりませんでした。"
        canonicalPath="/blog"
        ogImage="/hero.webp"
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-2xl mx-auto text-center py-20">
            <h1 className="text-2xl font-medium text-gray-900 mb-4">
              記事が見つかりませんでした
            </h1>
            <Link
              to={APP_ROUTE_PATHS.blog}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 underline underline-offset-4"
            >
              <ChevronLeft className="w-4 h-4" />
              ブログ一覧へ戻る
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title={`${post.title} | Smiley's Kennel`}
      description={post.excerpt}
      canonicalPath={`/blog/${post.slug}`}
      ogImage={post.image ?? "/hero.webp"}
    >
      <div className="container mx-auto px-6 md:px-12">
        <FadeInSection>
          <div className="max-w-3xl mx-auto">
            <Link
              to={APP_ROUTE_PATHS.blog}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 text-sm transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              ブログ一覧へ戻る
            </Link>

            <article>
              <header className="mb-10">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-500 mb-4">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  {post.category && (
                    <>
                      <span className="hidden sm:inline">・</span>
                      <span className="text-amber-700">{post.category}</span>
                    </>
                  )}
                </div>
                <h1
                  className="text-3xl md:text-4xl font-light text-gray-900 leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {post.title}
                </h1>
              </header>

              {post.image && (
                <div className="mb-10 overflow-hidden border border-gray-200 bg-gray-50">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto max-h-[420px] object-cover"
                    width={1200}
                    height={675}
                    loading="eager"
                  />
                </div>
              )}

              <div
                className="prose-blog text-gray-700 font-light leading-relaxed space-y-4 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-gray-900 [&_h3]:mt-8 [&_h3]:mb-2 [&_p]:leading-relaxed [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-gray-400 [&_a]:text-gray-900 [&_a]:hover:decoration-gray-900 [&_a]:transition-colors [&_a.blog-cta]:no-underline [&_a.blog-cta]:inline-flex [&_a.blog-cta]:items-center [&_a.blog-cta]:justify-center [&_a.blog-cta]:min-h-[48px] [&_a.blog-cta]:px-8 [&_a.blog-cta]:py-3 [&_a.blog-cta]:bg-gray-900 [&_a.blog-cta]:text-white [&_a.blog-cta]:tracking-widest [&_a.blog-cta]:hover:bg-gray-800 [&_a.blog-cta]:hover:text-white"
                dangerouslySetInnerHTML={{ __html: post.content.trim() }}
              />
            </article>
          </div>
        </FadeInSection>
      </div>
    </PageLayout>
  );
}
