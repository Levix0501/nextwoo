import BottomNav from '@/components/layout/bottom-nav';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <BottomNav />
      <Footer />
    </>
  );
}
