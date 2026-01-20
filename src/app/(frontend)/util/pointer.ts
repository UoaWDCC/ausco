import * as React from "react";

/**
 * Blurs the target element when navigation is triggered via pointer input (mouse or touch).
 *
 * When an element is activated through keyboard interaction (Enter or Space),
 * focus is intentionally preserved for accessibility.
 * For pointer-based navigation, the element is blurred after the click event completes
 * to prevent stuck :active / :focus-visible visual states in SPA navigation.
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
export function blurOnPointerNavigate(e: React.MouseEvent<HTMLElement>) {
  // Keyboard activation (Enter / Space) → keep focus
  if (e.detail === 0) return;

  const target = e.currentTarget;

  if (target instanceof HTMLElement) {
    requestAnimationFrame(() => {
      target.blur();
    });
  }
}
