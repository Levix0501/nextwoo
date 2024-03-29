import Prose from '@/components/prose';
import client from '@/graphql';
import { QUERY_POST_BY_SLUG } from '@/graphql/queries';
import { SiteConfig } from '@/lib/site-config';

export const metadata = {
  title: `About ${SiteConfig.siteName}`,
  description:
    'Next Woo is a headless eCommerce application with Next.js(React) and WooCommerce',
};

export default async function Page() {
  const about = await client.request<{
    post: {
      title: string;
      content: string;
    };
  }>(QUERY_POST_BY_SLUG, {
    slug: 'about',
  });

  return (
    <main className="p-4">
      <Prose html={about.post.content} />
    </main>
  );
}
