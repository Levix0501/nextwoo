import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Analytics from '@/components/analytics';
import HeaderNav from '@/components/layout/header-nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Woo',
  description:
    'A headless eCommerce application with Next.js(React) and WooCommerce.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Analytics />
      </head>
      <body className={inter.className}>
        <HeaderNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
