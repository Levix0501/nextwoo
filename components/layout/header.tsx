import { fetchCategories } from '@/api/category';
import { AlignLeft, GithubIcon, ShoppingCartIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import CategoriesNav from '../categories-nav';

export interface HeaderProps {}

const Header = async () => {
  const categories = await fetchCategories();

  return (
    <header>
      <div className="h-[50px] md:h-14"></div>
      <div className="h-[50px] md:h-14 w-full fixed top-0 px-3 lg:px-6 z-10 bg-white border-b border-[#E5E5E5]">
        <div className="h-full flex items-center justify-between">
          <div className="flex-1 md:hidden">
            <AlignLeft />
          </div>

          <div className="flex-1 flex justify-center md:justify-start">
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

          <div className="flex-1 flex justify-end space-x-2">
            <a
              href="https://doc.next-woo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black text-sm leading-6 text-[#666] flex"
            >
              <span>Doc</span>
              <svg
                aria-hidden="true"
                className=""
                height="7"
                viewBox="0 0 6 6"
                width="7"
              >
                <path
                  d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
                  fill="#999"
                ></path>
              </svg>
            </a>

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

        <div className="hidden md:block h-full absolute top-0 left-1/2 -translate-x-1/2">
          <div className="h-full flex justify-center items-center">
            <CategoriesNav categories={categories} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
