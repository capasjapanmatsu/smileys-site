/**
 * JSON-LD 構造化データ用ヘルパー
 */

const BASE_URL = "https://smileys.one";

export type BreadcrumbItem = { label: string; path?: string };

export type FaqSchemaItem = { q: string; a: string };

/** FAQPage schema を生成 */
export function createFaqPageSchema(
  faqs: FaqSchemaItem[],
  pageId?: string
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(pageId ? { "@id": pageId } : {}),
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

type HowToStep = { name: string; text: string };

/** HowTo schema を生成（お迎えまでの流れなど） */
export function createHowToSchema(
  name: string,
  description: string,
  steps: HowToStep[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

/**
 * パンくずリスト用 BreadcrumbList schema を生成
 * @param breadcrumbs パンくず項目（最後の項目は現在ページ）
 * @param currentPath 現在の canonical パス（例: /breeding-schedule）
 */
export function createBreadcrumbList(
  breadcrumbs: BreadcrumbItem[],
  currentPath: string
): Record<string, unknown> {
  const itemListElement: Record<string, unknown>[] = [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: `${BASE_URL}/`,
    },
  ];

  breadcrumbs.forEach((item, i) => {
    const position = i + 2;
    const path = item.path ?? currentPath;
    const url = `${BASE_URL}${path}`;
    itemListElement.push({
      "@type": "ListItem",
      position,
      name: item.label,
      item: url,
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}
