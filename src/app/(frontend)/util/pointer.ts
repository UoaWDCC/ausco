import * as React from "react";

/**
 * Runs a consumer onClick handler, then cleans up focus
 * for SPA navigation when the element is a link (<a> / <Link>).
 *
 * Note:
 * If the element is rendered via the shadcn Button component (e.g. using `asChild`),
 * this function is not required, as the focus-cleanup logic is already handled
 * internally by the Button implementation.
 *
 * @param e - The click event triggered on the interactive HTML element
 * @returns void
 *
 * @example
 * ```tsx
 * <Link href="/" onClick={blurOnPointerNavigate}>
 *   Click me
 * </Link>
 * ```
 */
export function handleLinkClick(
  e: React.MouseEvent<HTMLElement>,
  onClick?: React.MouseEventHandler<HTMLElement>,
) {
  // Run consumer onClick first
  onClick?.(e);

  const target = e.currentTarget;

  if (target instanceof HTMLElement) {
    requestAnimationFrame(() => {
      target.blur();
    });
  }
}
