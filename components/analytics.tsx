import { isDev } from '@/lib/env';
import { SiteConfig } from '@/lib/site-config';
import { GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';

const Analytics = () => {
  if (isDev) return null;

  const id = SiteConfig.gtmId;
  if (!id) return null;

  return <GoogleTagManager gtmId={id} />;
};

export default Analytics;
