import Footer from '@/components/layout/footer/footer';
import Header from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="py-32 flex flex-col items-center">
        <Image
          src="/empty-states/not-found.svg"
          alt="not found"
          width={200}
          height={150}
          priority
        />
        <div className="text-lg font-bold text-[#222] mb-10">OOPS...</div>
        <Link href="/">
          <Button className="font-bold">GO BACK HOME</Button>
        </Link>
      </main>
      <Footer />
    </>
  );
}
