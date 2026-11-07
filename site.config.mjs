// Single source of truth for URLs and legal identity.
// Moving to a custom domain? Change SITE_URL only (keep the trailing slash).

export const SITE_URL = process.env.SITE_URL || 'https://minhkhacld.github.io/scan-to-flow-landing/';

export const site = {
  name: 'Scan to Flow',
  tagline: 'Scan. Connect. Automate.',
  developer: 'Pham Minh Kha',
  country: { en: 'Vietnam', vi: 'Việt Nam' },
  email: 'pmkha92@gmail.com',
  appStoreUrl: 'https://apps.apple.com/app/id6446432287',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.minhkhacld.fscanstandard',
  // Dates of the legal documents, ISO format.
  legalEffective: '2026-11-07',
  legalUpdated: '2026-11-07',
};

// Path part of SITE_URL, e.g. "/scan-to-flow-landing/". Used by 404.html,
// which GitHub Pages serves at any depth, so it cannot use relative links.
export const BASE_PATH = new URL(SITE_URL).pathname;
