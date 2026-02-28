export const APP_ROUTE_PATHS = {
  home: "/",
  samoyed: "/samoyed",
  samoyedLegacy: "/samoyed-character",
  bloodline: "/bloodline",
  policy: "/policy",
  policyLegacy: "/breeding-policy",
  breedingSchedule: "/breeding-schedule",
  kubitka: "/kubitka",
  legal: "/legal",
  faq: "/faq",
} as const;

// Source of truth for sitemap auto-generation.
export const SITEMAP_ROUTE_PATHS = [
  APP_ROUTE_PATHS.home,
  APP_ROUTE_PATHS.samoyed,
  APP_ROUTE_PATHS.bloodline,
  APP_ROUTE_PATHS.policy,
  APP_ROUTE_PATHS.breedingSchedule,
  APP_ROUTE_PATHS.faq,
] as const;
