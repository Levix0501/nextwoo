import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.GRAPHQL_ENDPOINT;
if (!endpoint) throw new Error('GRAPHQL_ENDPOINT is required!');

const client = new GraphQLClient(endpoint);

export default client;
