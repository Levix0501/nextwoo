import { HomeIcon } from 'lucide-react';
import Link from 'next/link';

export interface BackHomeButtonProps {}

const BackHomeButton = () => {
  return (
    <div className="sm:hidden">
      <Link
        href="/"
        aria-label="go back home"
        className="fixed right-4 bottom-16 z-50"
      >
        <div className="h-14 w-14 flex justify-center items-center bg-white rounded-full border-[.01rem] border-[#dcdcdc] shadow-[0_0_0_0.1rem_0_rgba(0,0,0,.1)]">
          <HomeIcon />
        </div>
      </Link>
    </div>
  );
};

export default BackHomeButton;
