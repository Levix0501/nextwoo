import PaymentsAccept from '@/components/payments-accept';
import SocialMedias from '@/components/social-medias';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa6';

export interface FooterNavProps {}

export const footerMenu = [
  {
    name: 'COMPANY INFO',
    subMenu: [
      {
        subName: 'About Next Woo',
        link: '/',
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
        link: '/',
      },
      {
        subName: 'Returns',
        link: '/',
      },
      {
        subName: 'Refund',
        link: '/',
      },
    ],
  },
  {
    name: 'CUSTOMER CARE',
    subMenu: [
      {
        subName: 'Contact us',
        link: '/',
      },
      {
        subName: 'Payment & Tax',
        link: '/',
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
