import { gql } from 'graphql-request';

export const QUERY_POST_BY_SLUG = gql`
  query post($id: ID = "post") {
    post(id: $id, idType: SLUG) {
      id
      title
      slug
    }
  }
`;
