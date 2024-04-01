import { AlignLeft, GithubIcon, ShoppingCartIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import CategoriesNav from '../categories-nav';
import client from '@/graphql';
import to from '@/lib/await-to';
import { QUERY_PRODUCT_CATEGORIES } from '@/graphql/query/product-category';
import { ProductCategoryQuery, ProductCategoryType } from '@/types/category';

export interface HeaderProps {}

const Header = async () => {
  const [_, res] = await to(
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

  return (
    <header>
      <div className="h-[50px] sm:h-14"></div>
      <div className="h-[50px] sm:h-14 w-full fixed top-0 px-3 lg:px-6 z-10 bg-white border-b border-[#E5E5E5]">
        <div className="h-full flex items-center justify-between">
          <div className="flex-1 sm:hidden">
            <AlignLeft />
          </div>

          <div className="max-[639px]:flex-1 flex justify-center sm:justify-start">
            <Link href="/" aria-label="Next Woo Logo">
              <Image
                src="/next-woo.png"
                alt="Next Woo Logo"
                width={145}
                height={24}
                priority
              />
            </Link>
          </div>

          <div className="hidden sm:block flex-1 px-4">
            <CategoriesNav categories={categories} />
          </div>

          <div className="max-[639px]:flex-1 flex justify-end space-x-3">
            <a
              href="https://github.com/Levix0501/next-woo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Next Woo github link"
            >
              <GithubIcon />
            </a>

            <Link href="/cart" aria-label="cart">
              <ShoppingCartIcon />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
