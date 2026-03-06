import { getBlogPostSlugs } from "./content/blog";

export const APP_ROUTE_PATHS = {
  home: "/",
  samoyed: "/samoyed",
  samoyedLife: "/samoyed-life",
  samoyedLegacy: "/samoyed-character",
  bloodline: "/bloodline",
  policy: "/policy",
  policyLegacy: "/breeding-policy",
  breedingSchedule: "/breeding-schedule",
  kubitka: "/kubitka",
  legal: "/legal",
  privacy: "/privacy",
  faq: "/faq",
  blog: "/blog",
} as const;

// Source of truth for sitemap auto-generation.
export const SITEMAP_ROUTE_PATHS = [
  APP_ROUTE_PATHS.home,
  APP_ROUTE_PATHS.samoyed,
  APP_ROUTE_PATHS.samoyedLife,
  APP_ROUTE_PATHS.bloodline,
  APP_ROUTE_PATHS.policy,
  APP_ROUTE_PATHS.breedingSchedule,
  APP_ROUTE_PATHS.faq,
  APP_ROUTE_PATHS.privacy,
  APP_ROUTE_PATHS.blog,
  ...getBlogPostSlugs().map((slug) => `${APP_ROUTE_PATHS.blog}/${slug}`),
] as const;
