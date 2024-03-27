import Prose from '@/components/prose';
import client from '@/graphql';
import { QUERY_POST_BY_SLUG } from '@/graphql/queries';

export const metadata = {
  title: 'About NextWoo',
  description:
    'NextWoo is a headless eCommerce application with Next.js(React) and WooCommerce',
};

export default async function Page() {
  const about = await client.request<{
    post: {
      title: string;
      content: string;
    };
  }>(QUERY_POST_BY_SLUG, {
    slug: 'about-nextwoo',
  });

  return (
    <main className="p-4">
      <Prose html={about.post.content} />
    </main>
  );
}
