import { isDev } from '@/lib/env';
import { GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';

const Analytics = () => {
  if (isDev) return null;

  const id = process.env.GOOGLE_TAG_ID;
  if (!id) return null;

  return <GoogleTagManager gtmId={id} />;
};

export default Analytics;
