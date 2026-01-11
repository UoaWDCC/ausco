/**
 * Checks if a given URL is external (starts with http:// or https://)
 */
export const isExternal = (url: string): boolean =>
  url.startsWith("http://") || url.startsWith("https://");