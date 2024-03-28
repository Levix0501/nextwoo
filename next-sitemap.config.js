import { SiteConfig } from './lib/site-config';

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SiteConfig.siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
