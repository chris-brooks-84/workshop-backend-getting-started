const { readFileSync } = require('fs');
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const gql = require('graphql-tag');
const typeDefs = gql(readFileSync('./src/schema.graphql', { encoding: 'utf-8' }));

const mocks = require('./mocks');

const server = new ApolloServer({ typeDefs, mocks });
startStandaloneServer(server, {
  listen: { port: process.env.PORT || 4000 },
}).then(({ url }) => {
  console.log(`
    🚀  Server is running
    📭  Query at ${url}
`);
});
