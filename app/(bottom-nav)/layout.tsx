import BottomNav from '@/components/layout/bottom-nav';
import HeaderNav from '@/components/layout/header-nav';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderNav />
      <main>{children}</main>
      <BottomNav />
    </>
  );
}
