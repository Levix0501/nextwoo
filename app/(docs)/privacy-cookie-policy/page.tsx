import DocPageLayout from '@/components/layout/doc-page-layout';

export const metadata = {
  title: 'Privacy & Cookie Policy',
  description:
    'Next Woo is a headless eCommerce application with Next.js(React) and WooCommerce',
};

export default async function Page() {
  return (
    <DocPageLayout
      title="Privacy & Cookie Policy"
      slug="privacy-cookie-policy"
    />
  );
}
