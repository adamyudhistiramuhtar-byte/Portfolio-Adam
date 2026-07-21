// lib/utils.ts — Helper utilities

/**
 * Merge class names, filtering out falsy values.
 * Lightweight alternative to clsx/classnames without external dependency.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
