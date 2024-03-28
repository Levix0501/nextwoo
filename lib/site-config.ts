export interface SiteConfigType {
  siteName: string;
  siteUrl: string;
  gtmId: string | undefined;
  graphqlEndpoint: string | undefined;
}

const env = process.env;

export const SiteConfig: SiteConfigType = {
  siteName: env.SITE_NAME ?? 'Next Woo',
  siteUrl: env.SITE_URL ?? 'https://next-woo.com',
  gtmId: env.GOOGLE_TAG_MANAGER_ID,
  graphqlEndpoint: env.GRAPHQL_ENDPOINT,
};
