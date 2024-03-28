import { AlignLeft, GithubIcon, ShoppingCartIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export interface HeaderProps {}

const Header = () => {
  return (
    <header>
      <div className="h-[50px] sm:h-14"></div>
      <div className="h-[50px] sm:h-14 w-full fixed top-0 px-3 lg:px-6 z-10 bg-white border-b border-[#E5E5E5]">
        <div className="h-full flex items-center justify-between">
          <div className="flex-1 sm:hidden">
            <AlignLeft />
          </div>

          <div className="flex-1 flex justify-center sm:justify-start">
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

          <div className="hidden sm:block flex-1"></div>

          <div className="flex-1 flex justify-end space-x-3">
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
