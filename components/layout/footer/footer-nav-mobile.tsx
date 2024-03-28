import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { footerMenu } from './footer-nav';
import Link from 'next/link';
import { ChevronDownIcon } from 'lucide-react';
import styles from './footer-nav-mobile.module.css';
import PaymentsAccept from '@/components/payments-accept';
import SocialMedias from '@/components/social-medias';

export interface FooterNavMobileProps {}

const FooterNavMobile = (props: FooterNavMobileProps) => {
  return (
    <>
      {footerMenu.map(({ name, subMenu }) => (
        <section key={name}>
          <Collapsible className={styles['menu-item']}>
            <CollapsibleTrigger className="w-full h-full bg-white px-3">
              <div className="h-14 flex items-center justify-between relative after:absolute after:origin-top-left after:top-0 after:left-0 after:bottom-[-100%] after:right-[-100%] after:border-b after:border-[#dfdfdf] after:scale-50">
                <h6 className="text-[#222] text-sm font-medium">{name}</h6>
                <ChevronDownIcon className={styles['rotate-svg']} />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="px-3 py-4 space-y-3">
                {subMenu.map(({ subName, link }) => (
                  <li
                    key={subName}
                    className="text-[#666] hover:text-[#222] text-sm"
                  >
                    <Link href={link}>{subName}</Link>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </section>
      ))}
      <section className="px-3">
        <h6 className="h-14 leading-[56px] text-[#222] text-sm font-medium">
          WE ACCEPT
        </h6>
        <PaymentsAccept />
      </section>
      <section className="px-3">
        <h6 className="h-14 leading-[56px] text-[#222] text-sm font-medium">
          FIND US ON
        </h6>
        <SocialMedias className="mt-2 px-9 justify-between" />
      </section>
    </>
  );
};

export default FooterNavMobile;
