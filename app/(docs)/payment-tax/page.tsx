import DocPageLayout from '@/components/layout/doc-page-layout';

export const metadata = {
  title: 'Payment & Tax',
  description:
    'Next Woo is a headless eCommerce application with Next.js(React) and WooCommerce',
};

export default async function Page() {
  return <DocPageLayout title="Payment & Tax" slug="payment-tax" />;
}
