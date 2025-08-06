'use client';
import { DefaultSeo } from 'next-seo';

const SEO = () => (
  <DefaultSeo
    title="Abf & Sons Global Services Ltd"
    description="Instant loans, POF, flexible payments and more. Located in Lekki, Lagos, Nigeria."
    openGraph={{
      type: 'website',
      locale: 'en_NG',
      url: 'https://abfglobalservices.com',
      site_name: 'Abf & Sons Global Services Ltd',
      images: [
        {
          url: '/logo.png',
          width: 800,
          height: 600,
          alt: 'Abf & Sons Logo',
        },
      ],
    }}
    twitter={{
      handle: '@abfglobal',
      site: '@abfglobal',
      cardType: 'summary_large_image',
    }}
  />
);

export default SEO;
