import { Link } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import { FadeInSection } from "../components/FadeInSection";
import { sortedBlogPosts } from "../content/blog";
import { ChevronRight } from "lucide-react";
import { APP_ROUTE_PATHS } from "../routePaths";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPage() {
  return (
    <PageLayout
      title="ブログ | Smiley's Kennel"
      description="熊本・九州のサモエド専門犬舎 Smiley'sのブログ。子犬のご案内、飼育のヒント、犬舎のお知らせなどをお届けします。"
      canonicalPath="/blog"
      ogImage="/hero.webp"
    >
      <div className="container mx-auto px-6 md:px-12">
        <FadeInSection>
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-4xl md:text-5xl font-light mb-4 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              ブログ
            </h1>
            <p className="text-center text-gray-600 mb-12 font-light">
              子犬のご案内や飼育のヒント、犬舎のお知らせをお届けします
            </p>
          </div>
        </FadeInSection>

        <div className="max-w-3xl mx-auto space-y-6">
          {sortedBlogPosts.map((post, index) => (
            <FadeInSection key={post.slug} delay={index * 0.05}>
              <Link
                to={`${APP_ROUTE_PATHS.blog}/${post.slug}`}
                className="block border border-gray-200 bg-white p-6 md:p-8 hover:border-gray-400 hover:bg-gray-50/50 transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-500 mb-3">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  {post.category && (
                    <>
                      <span className="hidden sm:inline">・</span>
                      <span className="text-amber-700">{post.category}</span>
                    </>
                  )}
                </div>
                <h2 className="text-xl md:text-2xl font-medium text-gray-900 mb-2 group-hover:text-amber-800 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 font-light leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm text-gray-500 group-hover:text-gray-900 transition-colors">
                  続きを読む
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </FadeInSection>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
