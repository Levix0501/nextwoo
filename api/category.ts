import client from '@/graphql';
import { QUERY_PRODUCT_CATEGORIES } from '@/graphql/query/product-category';
import to from '@/lib/await-to';
import { ProductCategoryQuery, ProductCategoryType } from '@/types/category';
import { unstable_cache } from 'next/cache';

export const fetchCategories = unstable_cache(async () => {
  const [, res] = await to(
    client.request<ProductCategoryQuery>(QUERY_PRODUCT_CATEGORIES)
  );
  const categories: ProductCategoryType[] = res
    ? res.productCategories.nodes
        .filter((item) => !item.ancestors && item.children.nodes.length > 0)
        .map(({ slug, name, children }) => ({
          slug,
          name,
          children: children.nodes
            .filter((item) => item.image)
            .map(({ slug, name, image }) => ({
              slug,
              name,
              thumbnail: image?.sourceUrl!,
            })),
        }))
    : [];
  return categories;
});
