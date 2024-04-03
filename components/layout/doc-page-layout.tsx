import client from '@/graphql';
import { QUERY_POST_BY_SLUG } from '@/graphql/query/post';
import { PostType } from '@/types/post';
import BackHomeButton from '../back-home-button';
import Prose from '../prose';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';
import to from '@/lib/await-to';
import { notFound } from 'next/navigation';

export interface DocPageLayoutProps {
  title: string;
  slug: string;
}

const DocPageLayout = async ({ title, slug }: DocPageLayoutProps) => {
  const [, doc] = await to(
    client.request<{ post?: PostType }>(QUERY_POST_BY_SLUG, {
      slug,
    })
  );

  if (!doc || !doc.post) {
    notFound();
  }

  return (
    <main className="p-4 sm:py-0">
      <div className="max-w-screen-xl mx-auto">
        <div className="hidden sm:block">
          <Breadcrumb className="pt-5 pb-10">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <Prose html={doc.post.content} />
      </div>

      <BackHomeButton />
    </main>
  );
};

export default DocPageLayout;
