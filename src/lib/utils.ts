/**
 * Shared utility functions and constants
 */

// Site configuration
// BASE_PATH matches next.config.ts's basePath - set by CI to the project-pages
// subpath since this repo isn't <user>.github.io. Empty locally.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const SITE_URL = `https://kshitijpwr04.github.io${BASE_PATH}`;
export const AUTHOR_NAME = 'Kshitij Bhausaheb Pawar';
export const TWITTER_HANDLE = '';

// Image dimension constants
export const AVATAR_SIZE = {
  hero: 120,
  footer: 80,
  sidebar: 200,
} as const;

export const PROJECT_IMAGE = {
  width: 600,
  height: 400,
} as const;

// Skill competency
export const MAX_COMPETENCY = 5;

/**
 * Formats a date string to a human-readable format.
 * Parses as UTC to avoid timezone shifts.
 */
export function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  // Parse as UTC to avoid timezone shifts
  const date = new Date(`${dateStr}T12:00:00`);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
