export const galleryImages = Array.from(
  { length: 39 },
  (_, i) => `/gallery/gallery-${String(i + 1).padStart(2, "0")}.webp`
);

export const homeGalleryImages = galleryImages.slice(0, 12);
