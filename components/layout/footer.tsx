import Link from 'next/link';
import PaymentsAccept from '../payments-accept';
import FooterNav from './footer-nav';

const Footer = () => {
  return (
    <footer className="hidden sm:block mt-14 pt-7 bg-[#fafafa]">
      <div className="px-5 md:px-11 mx-auto max-w-screen-xl space-y-9">
        <FooterNav />
        <div className="space-y-2">
          <h6 className="text-[#222] text-sm font-bold">We accept</h6>
          <PaymentsAccept />
        </div>
        <div className="h-20 flex justify-center items-center text-xs text-[#666] space-x-5 border-t border-[#e5e5e5]">
          <div>© 2024 NextWoo All Rights Reserved.</div>
          <Link href="/" className="hover:text-[#222]">
            Terms & Conditions
          </Link>
          <Link href="/" className="hover:text-[#222]">
            Privacy & Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
