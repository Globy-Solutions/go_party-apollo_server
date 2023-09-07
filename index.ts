import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginCacheControl } from '@apollo/server/plugin/cacheControl';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';
import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault } from '@apollo/server/plugin/landingPage/default';

import { startStandaloneServer } from '@apollo/server/standalone';

import { resolvers, typeDefs } from './modules';

interface MyContext {
  token?: String;
}

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [
    process.env.NODE_ENV === 'production'
      ? (ApolloServerPluginLandingPageProductionDefault({
        footer: false,
      }), ApolloServerPluginLandingPageDisabled())
      : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
    ApolloServerPluginCacheControl({
      // Cache everything for 1 second by default.
      defaultMaxAge: 1,
      // Don't send the `cache-control` response header.
      calculateHttpHeaders: false,
    }),
  ],
});
(async () => {
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => {
      const token = req.headers.authorization || '';
      return { token }
    },
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
})()
