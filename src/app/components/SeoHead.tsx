import { Helmet } from "react-helmet-async";

const BASE_URL = "https://www.sammy-smile.com";

type SeoHeadProps = {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown>[];
  keywords?: string;
};

export function SeoHead({
  title,
  description,
  canonicalPath,
  ogImage = "/hero.webp",
  jsonLd = [],
  keywords = "サモエド,サモエド ブリーダー,熊本,九州,犬舎",
}: SeoHeadProps) {
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;
  const imageUrl = `${BASE_URL}${ogImage}`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {jsonLd.map((schema, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
