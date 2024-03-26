import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

export interface HeaderNavProps {}

const HeaderNav = (props: HeaderNavProps) => {
  return (
    <header>
      <div className="h-[50px] sm:h-14"></div>
      <div className="h-[50px] sm:h-14 w-full fixed top-0 px-3 lg:px-6 z-10 bg-white border-b border-[#E5E5E5]">
        <div className="h-full flex items-center justify-between">
          <div className="sm:hidden w-6 h-6"></div>

          <div className="flex-1 flex md:w-1/3">
            <Link
              href="/"
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            >
              <Image
                src="/next-woo.png"
                alt="NextWoo logo"
                width={145}
                height={24}
                priority
              />
            </Link>
          </div>

          <div className="flex justify-end md:w-1/3"></div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
