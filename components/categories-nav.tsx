'use client';

import { cn } from '@/lib/utils';
import { ProductCategoryType } from '@/types/category';
import { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import Link from 'next/link';
import { ChevronDown, ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';

export interface CategoriesNavProps {
  categories: ProductCategoryType[];
}

const CategoriesNav = ({ categories }: CategoriesNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  if (!categories.length) return null;

  const onMouseEnter = () => setIsOpen(true);
  const onMouseLeave = () => setIsOpen(false);
  return (
    <div
      className="inline-block"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="group cursor-pointer inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
        Categories
        <ChevronDown
          className="ml-1 h-3 w-3 transition duration-200 group-hover:rotate-180"
          aria-hidden="true"
        />
      </div>

      <div
        className={cn(
          'absolute left-[-9999px] transition-opacity w-[768px] pt-1',
          {
            'opacity-0': !isOpen,
            'opacity-100': isOpen,
            'left-1/2 -translate-x-1/2': isOpen,
          }
        )}
      >
        <div className="bg-white shadow-[-6px_6px_12px_-4px_rgba(0,0,0,.1)] border border-[#dfdfdf] rounded">
          <Tabs.Root defaultValue={categories[0].slug} className="flex">
            <Tabs.List className="w-[180px] py-3 pr-2">
              <div className="flex flex-col border-r border-[#ececec]">
                {categories.map(({ slug, name }) => (
                  <Tabs.Trigger
                    key={slug}
                    value={slug}
                    className="px-3 h-8 flex items-center justify-between"
                  >
                    <Link href="/" className="text-[#222] text-sm">
                      {name}
                    </Link>
                    <ChevronRightIcon size={16} color="#aaaaaa" />
                  </Tabs.Trigger>
                ))}
              </div>
            </Tabs.List>
            <div className="flex-1 p-3">
              {categories.map(({ slug, children }) => (
                <Tabs.Content key={slug} value={slug} className="flex">
                  {children.map(({ slug, name, thumbnail }) => (
                    <div key={slug} className="flex-[0_0_20%]">
                      <div className="flex flex-col items-center mb-2">
                        <Image
                          src={thumbnail}
                          alt={name}
                          width={60}
                          height={60}
                          priority
                          className="rounded-full overflow-hidden bg-[#e5e5e5]"
                        />
                        <span className="text-black text-xs line-clamp-3">
                          {name}
                        </span>
                      </div>
                    </div>
                  ))}
                </Tabs.Content>
              ))}
            </div>
          </Tabs.Root>
        </div>
      </div>
    </div>
  );
};

export default CategoriesNav;
