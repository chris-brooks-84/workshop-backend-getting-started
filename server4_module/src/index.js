import { readFileSync }  from  'fs';
import { ApolloServer }  from '@apollo/server';
import { startStandaloneServer }  from '@apollo/server/standalone';
import gql  from 'graphql-tag';
import {mocks} from './mocks.js';

const typeDefs = gql(readFileSync('./src/schema.graphql', { encoding: 'utf-8' }));

const server = new ApolloServer({ typeDefs, mocks });
const { url } = await startStandaloneServer(server, {
  listen: { port: process.env.PORT || 4000 },
})

console.log(`🚀  Server ready at ${url}`);
