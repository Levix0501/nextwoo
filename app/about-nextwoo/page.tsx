import Prose from '@/components/prose';
import client from '@/graphql';
import { QUERY_POST_BY_SLUG } from '@/graphql/queries';

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
      <h1 className="text-5xl font-bold">{about.post.title}</h1>
      <Prose html={about.post.content} />
    </main>
  );
}
