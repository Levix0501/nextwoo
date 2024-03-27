import { AlignLeft, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export interface HeaderNavProps {}

const HeaderNav = () => {
  return (
    <header>
      <div className="h-[50px] sm:h-14"></div>
      <div className="h-[50px] sm:h-14 w-full fixed top-0 px-3 lg:px-6 z-10 bg-white border-b border-[#E5E5E5]">
        <div className="h-full flex items-center justify-between">
          <div className="flex-1 sm:hidden">
            <AlignLeft />
          </div>

          <div className="flex-1 flex justify-center sm:justify-start">
            <Link href="/">
              <Image
                src="/next-woo.png"
                alt="NextWoo logo"
                width={145}
                height={24}
                priority
              />
            </Link>
          </div>

          <div className="hidden sm:block flex-1"></div>

          <div className="flex-1 flex justify-end">
            <Link href="/cart">
              <ShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
