'use client';
import { cn } from '@/lib/utils';
import { ShoppingCart, ShoppingCartIcon, User, UserIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';

export interface BottomNavProps {}

const BottomNav = () => {
  const pathname = usePathname();
  return (
    <section className="h-[50px] w-full fixed bottom-0 border-t border-[#ccc] sm:hidden">
      <nav className="h-full flex text-xs text-[#767676]">
        <Link href="/" className="flex-1">
          <div className="h-full flex flex-col items-center justify-center">
            {pathname === '/' ? (
              <AiFillHome size={24} color="#222" strokeWidth={2} />
            ) : (
              <AiOutlineHome size={24} color="#767676" strokeWidth={2} />
            )}
            <span className={cn({ 'text-[#222]': pathname === '/' })}>
              Home
            </span>
          </div>
        </Link>
        <Link href="/cart" className="flex-1">
          <div className="h-full flex flex-col items-center justify-center">
            {pathname === '/cart' ? (
              <ShoppingCartIcon color="#222" fill="#222" />
            ) : (
              <ShoppingCartIcon color="#767676" />
            )}
            <span className={cn({ 'text-[#222]': pathname === '/cart' })}>
              Cart
            </span>
          </div>
        </Link>
        <Link href="/user" className="flex-1">
          <div className="h-full flex flex-col items-center justify-center">
            {pathname === '/user' ? (
              <UserIcon color="#222" fill="#222" />
            ) : (
              <UserIcon color="#767676" />
            )}
            <span className={cn({ 'text-[#222]': pathname === '/user' })}>
              Me
            </span>
          </div>
        </Link>
      </nav>
    </section>
  );
};

export default BottomNav;
