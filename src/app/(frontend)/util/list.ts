/**
 * Converts a comma- or semicolon-separated string into a trimmed array of non-empty strings.
 */
export const stringToList = (input: string): string[] =>
  input
    .split(/[,;]+/)
    .map((item) => item.trim())
    .filter(Boolean);

/**
 * Converts a comma- or semicolon-separated string of names into a human-readable string.
 * Uses "&" before the final name.
 */
export const listToReadableString = (input: string): string => {
  const list = stringToList(input);

  if (list.length === 0) return "";
  if (list.length === 1) return list[0];
  if (list.length === 2) return `${list[0]} & ${list[1]}`;

  return `${list.slice(0, -1).join(", ")} & ${list.at(-1)}`;
};
