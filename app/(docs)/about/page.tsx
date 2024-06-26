import DocPageLayout from '@/components/layout/doc-page-layout';
import { SiteConfig } from '@/lib/site-config';

export const metadata = {
  title: `About ${SiteConfig.siteName}`,
  description:
    'Next Woo is a headless eCommerce application with Next.js(React) and WooCommerce',
};

export default async function Page() {
  return <DocPageLayout title={`About ${SiteConfig.siteName}`} slug="about" />;
}
