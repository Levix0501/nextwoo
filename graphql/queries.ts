import { gql } from 'graphql-request';

export const QUERY_POST_BY_SLUG = gql`
  query post($slug: ID = "post") {
    post(id: $slug, idType: SLUG) {
      id
      title
      slug
      content
    }
  }
`;
