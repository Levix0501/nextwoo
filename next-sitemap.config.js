/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://next-woo-pearl.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
