import { isDev } from '@/lib/env';
import Script from 'next/script';

const Analytics = () => {
  if (isDev) return null;

  const id = process.env.GOOGLE_TAG_ID;
  if (!id) return null;

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      ></Script>
      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
    
            gtag('config', '${id}');
        `}
      </Script>
    </>
  );
};

export default Analytics;
