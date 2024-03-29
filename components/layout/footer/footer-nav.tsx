import PaymentsAccept from '@/components/payments-accept';
import SocialMedias from '@/components/social-medias';
import { SiteConfig } from '@/lib/site-config';
import Link from 'next/link';

export interface FooterNavProps {}

export const footerMenu = [
  {
    name: 'COMPANY INFO',
    subMenu: [
      {
        subName: `About ${SiteConfig.siteName}`,
        link: '/about',
      },
      {
        subName: 'Blog',
        link: '/',
      },
    ],
  },
  {
    name: 'HELP & SUPPORT',
    subMenu: [
      {
        subName: 'Shipping info',
        link: '/shipping-information',
      },
      {
        subName: 'Returns',
        link: '/return-policy',
      },
      {
        subName: 'Refund',
        link: '/refund-policy',
      },
    ],
  },
  {
    name: 'CUSTOMER CARE',
    subMenu: [
      {
        subName: 'Contact us',
        link: '/contact-us',
      },
      {
        subName: 'Payment & Tax',
        link: '/payment-tax',
      },
    ],
  },
];

const FooterNav = (props: FooterNavProps) => {
  return (
    <>
      <div className="flex justify-center">
        {footerMenu.map(({ name, subMenu }) => (
          <section key={name} className="flex-1">
            <h6 className="text-[#222] text-sm font-bold">{name}</h6>
            <ul className="mt-2 space-y-2">
              {subMenu.map(({ subName, link }) => (
                <li
                  key={subName}
                  className="text-[#666] hover:text-[#222] text-xs"
                >
                  <Link href={link}>{subName}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <section className="flex-1">
          <h6 className="text-[#222] text-sm font-bold">FIND US ON</h6>
          <SocialMedias className="mt-2" />
        </section>
      </div>
      <section className="space-y-2">
        <h6 className="text-[#222] text-sm font-bold">WE ACCEPT</h6>
        <PaymentsAccept />
      </section>
    </>
  );
};

export default FooterNav;
