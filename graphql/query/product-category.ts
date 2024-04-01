import { gql } from 'graphql-request';

export const QUERY_PRODUCT_CATEGORIES = gql`
  {
    productCategories(first: 100, where: { orderby: TERM_ORDER, order: ASC }) {
      nodes {
        slug
        name
        children(first: 100, where: { orderby: TERM_ORDER, order: ASC }) {
          nodes {
            slug
            name
            image {
              sourceUrl
            }
          }
        }
        ancestors {
          nodes {
            id
          }
        }
      }
    }
  }
`;
