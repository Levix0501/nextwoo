'use client';
import { useIsMobile } from '@/hooks/use-is-mobile';
import Link from 'next/link';
import FooterNav from './footer-nav';
import FooterNavMobile from './footer-nav-mobile';
import { SiteConfig } from '@/lib/site-config';

const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <footer className="bg-[#fafafa] mt-14 sm:pt-7">
      <div className="sm:px-5 md:px-11 sm:mx-auto sm:max-w-screen-xl sm:space-y-9">
        {isMobile ? <FooterNavMobile /> : <FooterNav />}

        <div className="pt-4 pb-9 text-xs text-[#666] flex flex-col items-center sm:flex-row sm:justify-center sm:p-0 sm:h-20 sm:space-x-5 sm:border-t sm:border-[#e5e5e5]">
          <div className="py-5">
            © 2024 {SiteConfig.siteName} All Rights Reserved.
          </div>
          <div className="space-x-5 underline">
            <Link href="/" className="hover:text-[#222]">
              Terms & Conditions
            </Link>
            <Link href="/" className="hover:text-[#222]">
              Privacy & Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
