const { ApolloServer, gql } = require('apollo-server');
const { readFileSync } = require('fs');

const typeDefs = gql(readFileSync('./src/schema.graphql', { encoding: 'utf-8' }));
const resolvers = require('./resolvers');
const TrackAPI = require('./datasources/track-api');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      trackAPI: new TrackAPI(),
    };
  },
  // For workshop demo purposes, we are setting introspection to true. This allows Apollo Sandbox to query the API.
  introspection: true
});

server.listen({ port: process.env.PORT || 4000 }).then(({ port, url }) => {
  console.log(`
    🚀  Server is running
    🔉  Listening on port ${port}
    📭  Query at ${url}
  `);
});
