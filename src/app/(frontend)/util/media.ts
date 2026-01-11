import { Media } from "@/payload-types";

/**
 * Extracts the URL from a Media object or returns the string as-is.
 * Returns null if no valid URL is found.
 */
export const getImageUrl = (image: Media | string | null | undefined): string | null => {
  if (!image) return null; // handle undefined or null
  if (typeof image === "string") return image; // if it's already a string URL
  if (typeof image === "object" && image.url) return image.url; // if it's a Media object, extract the URL
  return null;
};

/**
 * Extracts the alt text from a Media object or returns a fallback string.
 */
export const getImageAlt = (image: Media | string | null | undefined, fallback: string): string => {
  if (!image) return fallback; // handle undefined or null
  if (typeof image === "object" && image.alt) return image.alt; // if it's a Media object, extract the alt text
  return fallback;
};
