import { cn } from '@/lib/utils';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaTiktok,
} from 'react-icons/fa6';

export interface SocialMediasProps {
  className?: string;
  itemClassName?: string;
}

const SocialMedias = ({ className, itemClassName }: SocialMediasProps) => {
  const liClassName = cn('mr-2 mb-2', itemClassName);
  return (
    <ul className={cn('flex flex-wrap', className)}>
      <li className={liClassName}>
        <FaFacebookF size={24} />
      </li>
      <li className={liClassName}>
        <FaInstagram size={24} />
      </li>
      <li className={liClassName}>
        <FaTwitter size={24} />
      </li>
      <li className={liClassName}>
        <FaYoutube size={24} />
      </li>
      <li className={liClassName}>
        <FaPinterest size={24} />
      </li>
      <li className={liClassName}>
        <FaTiktok size={24} />
      </li>
    </ul>
  );
};

export default SocialMedias;
