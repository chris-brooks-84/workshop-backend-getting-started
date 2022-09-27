import { readFileSync }  from  'fs';
import { ApolloServer }  from '@apollo/server';
import { startStandaloneServer }  from '@apollo/server/standalone';
import gql  from 'graphql-tag';
import { CatsAPI } from './datasources/cats-api.js';
import { resolvers } from './resolvers.js';

const typeDefs = gql(readFileSync('./src/schema.graphql', { encoding: 'utf-8' }));

const server = new ApolloServer({
  typeDefs,
  resolvers
});


const { url } = await startStandaloneServer(server, {
  context: async () => {
    const { cache } = server; 
    return {
      dataSources: {
        catsAPI: new CatsAPI({ cache })
      },
    };
  },
});


console.log(`🚀  Server ready at ${url}`);
