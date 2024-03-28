import { SiteConfig } from '@/lib/site-config';
import { GraphQLClient } from 'graphql-request';

const endpoint = SiteConfig.graphqlEndpoint;
if (!endpoint) throw new Error('GRAPHQL_ENDPOINT is required!');

const client = new GraphQLClient(endpoint);

export default client;
