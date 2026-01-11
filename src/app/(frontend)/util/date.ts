/**
 * Normalises a Date to midnight (local time), removing time components.
 */
export const normaliseDate = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());
