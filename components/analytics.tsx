import { isDev } from '@/lib/env';
import { GoogleTagManager } from '@next/third-parties/google';

const Analytics = () => {
  if (isDev) return null;

  const id = process.env.GOOGLE_TAG_MANAGER_ID;
  if (!id) return null;

  return <GoogleTagManager gtmId={id} />;
};

export default Analytics;
