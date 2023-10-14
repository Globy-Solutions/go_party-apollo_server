import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginCacheControl } from '@apollo/server/plugin/cacheControl';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault
} from '@apollo/server/plugin/landingPage/default';

import { startStandaloneServer } from '@apollo/server/standalone';

import { resolvers, typeDefs } from './modules';

interface MyContext {
  token?: String;
}

const port: number = 8080;
const production: boolean = process.env.NODE_ENV === 'production';
const getAuth = (token: string | string[] | undefined) => true // token !== '' && token !== undefined;
const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [
    production
      ? (
        ApolloServerPluginLandingPageProductionDefault({
          footer: production,
        }),
        ApolloServerPluginLandingPageDisabled()
      )
      : ApolloServerPluginLandingPageLocalDefault({ footer: production }),
    ApolloServerPluginCacheControl({
      // Cache everything for 1 second by default.
      defaultMaxAge: 1,
      // Don't send the `cache-control` response header.
      calculateHttpHeaders: false
    })
  ]
});
(async () => {
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => ({
      auth: getAuth(req.headers.authorization),
      dataSources: {
        userApi: null
      },
    }),
    listen: { port }
  });

  console.log(`🚀  Server ready at: ${url}`)
})()
