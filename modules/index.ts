import { default as CategoryResolvers } from './category/resolvers';
import { default as CategorySchema } from './category/schema';
import { default as CommentResolvers } from './comment/resolvers';
import { default as CommentSchema } from './comment/schema';
import { default as EventResolvers } from './event/resolvers';
import { default as EventSchema } from './event/schema';
import { default as HistoryResolvers } from './history/resolvers';
import { default as HistorySchema } from './history/schema';
import { default as SessionResolvers } from './session/resolvers';
import { default as SessionSchema } from './session/schema';
import { default as UserResolvers } from './user/resolvers';
import { default as UserSchema } from './user/schema';

const rootTypeDefs = `
  scalar Date
  interface ABM {
    created_date: Date
    updated_date: Date
    deleted_date: Date
  }
  type Query {
    hello: String
  }
  type Subscription {
    sayHello: String
  }
`;

const rootResolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
  Subscription: {
    sayHello: {
      // Example using an async generator
      subscribe: async function* () {
        for await (const word of ['Hello', 'Bonjour', 'Ciao']) {
          yield { hello: word };
        }
      },
    }
  }
};

export const typeDefs = [
  rootTypeDefs,
  SessionSchema,
  UserSchema,
  CategorySchema,
  EventSchema,
  CommentSchema,
  HistorySchema
]
export const resolvers = [
  rootResolvers,
  SessionResolvers,
  UserResolvers,
  CategoryResolvers,
  EventResolvers,
  CommentResolvers,
  HistoryResolvers
]