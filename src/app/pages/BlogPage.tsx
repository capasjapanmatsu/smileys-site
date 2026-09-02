import { useState } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import { FadeInSection } from "../components/FadeInSection";
import {
  blogCategories,
  sortedBlogPosts,
  type BlogPost,
} from "../content/blog";
import { ChevronRight } from "lucide-react";
import { APP_ROUTE_PATHS } from "../routePaths";

type FilterValue = "すべて" | (typeof blogCategories)[number];

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
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

      {post.image ? (
        <div className="flex gap-4 sm:gap-5">
          <img
            src={post.image}
            alt=""
            className="w-24 md:w-32 shrink-0 aspect-[4/3] object-cover border border-gray-200 bg-gray-50"
            width={128}
            height={96}
            loading="lazy"
          />
          <div className="flex-1 min-w-0">
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
          </div>
        </div>
      ) : (
        <>
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
        </>
      )}
    </Link>
  );
}

export function BlogPage() {
  const [filter, setFilter] = useState<FilterValue>("すべて");

  const filtered =
    filter === "すべて"
      ? sortedBlogPosts
      : sortedBlogPosts.filter((post) => post.category === filter);

  const mainPosts =
    filter === "すべて"
      ? filtered.filter((post) => post.category !== "お知らせ")
      : filter === "お知らせ"
        ? []
        : filtered;
  const newsPosts =
    filter === "すべて" || filter === "お知らせ"
      ? sortedBlogPosts.filter((post) => post.category === "お知らせ")
      : [];

  const filters: FilterValue[] = ["すべて", ...blogCategories];

  return (
    <PageLayout
      title="ブログ | Smiley's（熊本・九州）"
      description="サミースマイル犬舎（SAMMY.SMILE JP'S）のブログ。子犬のご案内、飼育のヒント、犬舎のお知らせなどをお届けします。"
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
            <p className="text-center text-gray-600 mb-10 font-light">
              子犬のご案内や飼育のヒント、犬舎のお知らせをお届けします
            </p>
          </div>
        </FadeInSection>

        <div className="max-w-3xl mx-auto mb-10">
          <div
            className="flex flex-wrap justify-center gap-x-5 gap-y-3"
            role="tablist"
            aria-label="ブログのカテゴリ"
          >
            {filters.map((item) => {
              const active = filter === item;
              return (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(item)}
                  className={`text-sm tracking-wider pb-1 border-b transition-colors min-h-[44px] ${
                    active
                      ? "text-gray-900 border-gray-900"
                      : "text-gray-500 border-transparent hover:text-gray-800 hover:border-gray-300"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {mainPosts.map((post, index) => (
            <FadeInSection key={post.slug} delay={Math.min(index * 0.04, 0.2)}>
              <BlogPostCard post={post} />
            </FadeInSection>
          ))}

          {newsPosts.length > 0 && (
            <div className={filter === "すべて" ? "pt-10" : undefined}>
              {filter === "すべて" && (
                <h2
                  className="text-2xl font-light mb-6 text-gray-900"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  お知らせ
                </h2>
              )}
              <div className="space-y-6">
                {newsPosts.map((post, index) => (
                  <FadeInSection
                    key={post.slug}
                    delay={Math.min(index * 0.04, 0.2)}
                  >
                    <BlogPostCard post={post} />
                  </FadeInSection>
                ))}
              </div>
            </div>
          )}

          {mainPosts.length === 0 && newsPosts.length === 0 && (
            <p className="text-center text-gray-500 font-light py-12">
              このカテゴリの記事はまだありません。
            </p>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
