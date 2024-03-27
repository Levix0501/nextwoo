import { cn } from '@/lib/utils';
import type { FunctionComponent } from 'react';

interface TextProps {
  html: string;
  className?: string;
}

const Prose: FunctionComponent<TextProps> = ({ html, className }) => {
  return (
    <article
      className={cn('prose mx-auto max-w-6xl', className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Prose;
