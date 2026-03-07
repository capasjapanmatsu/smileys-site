import { useEffect } from "react";

const BASE_URL = "https://smileys.one";

type SeoOptions = {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
};

function upsertMetaByName(name: string, content: string) {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function upsertMetaByProperty(property: string, content: string) {
  let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function upsertPreload(id: string, href: string, as: "image" | "video" = "image") {
  let link = document.querySelector(`link[data-preload-id="${id}"]`) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("data-preload-id", id);
    document.head.appendChild(link);
  }
  link.setAttribute("rel", "preload");
  link.setAttribute("as", as);
  link.setAttribute("href", href);
}

function removeImagePreload(id: string) {
  const link = document.querySelector(`link[data-preload-id="${id}"]`);
  if (link) {
    link.remove();
  }
}

export function useSeo({ title, description, canonicalPath, ogImage = "/hero.webp" }: SeoOptions) {
  useEffect(() => {
    const canonicalUrl = `${BASE_URL}${canonicalPath}`;
    const imageUrl = `${BASE_URL}${ogImage}`;

    document.title = title;

    upsertMetaByName("description", description);
    upsertMetaByName("twitter:title", title);
    upsertMetaByName("twitter:description", description);
    upsertMetaByName("twitter:image", imageUrl);

    upsertMetaByProperty("og:title", title);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:url", canonicalUrl);
    upsertMetaByProperty("og:image", imageUrl);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // Only preload the hero video on top page. Preloading it globally wastes bytes on sub-pages.
    if (canonicalPath === "/") {
      upsertPreload("home-hero", "/hero.mp4", "video");
    } else {
      removeImagePreload("home-hero");
    }
  }, [title, description, canonicalPath, ogImage]);
}
