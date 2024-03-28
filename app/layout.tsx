import Analytics from '@/components/analytics';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { SiteConfig } from '@/lib/site-config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: SiteConfig.siteName,
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
