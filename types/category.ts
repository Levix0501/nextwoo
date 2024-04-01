export interface ProductCategoryQuery {
  productCategories: {
    nodes: {
      slug: string;
      name: string;
      children: {
        nodes: {
          slug: string;
          name: string;
          image: {
            sourceUrl: string;
          } | null;
        }[];
      };
      ancestors?: {
        nodes: {}[];
      };
    }[];
  };
}

export interface ProductCategoryType {
  slug: string;
  name: string;
  children: {
    slug: string;
    name: string;
    thumbnail: string;
  }[];
}
