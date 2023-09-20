import { default as CategoryResolvers } from './category/resolvers';
import { default as CategorySchema } from './category/schema';
import { default as CommentResolvers } from './comment/resolvers';
import { default as CommentSchema } from './comment/schema';
import { default as EventResolvers } from './event/resolvers';
import { default as EventSchema } from './event/schema';
import { default as HistoryResolvers } from './history/resolvers';
import { default as HistorySchema } from './history/schema';
import { default as RolResolvers } from './rol/resolvers';
import { default as RolSchema } from './rol/schema';
import { default as SessionResolvers } from './session/resolvers';
import { default as SessionSchema } from './session/schema';
import { default as TeamResolvers } from './team/resolvers';
import { default as TeamSchema } from './team/schema';
import { default as UserResolvers } from './user/resolvers';
import { default as UserSchema } from './user/schema';

import type { AllowedNotification, Notification } from '../types';

type NotificationType = {
  [key in AllowedNotification]: Notification
}

export const notification: NotificationType = {
  error: {
    type: 'error', message: 'Not found'
  },
  success: {
    type: 'success', message: 'Found'
  },
  warning: {
    type: 'warning', message: 'Found - Warning'
  },
  info: {
    type: 'info', message: 'Info'
  }
}

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
  interface Notification {
    type: String
    message: String
  }
  interface Response {
    notification: Notification
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
  RolSchema,
  UserSchema,
  CategorySchema,
  EventSchema,
  CommentSchema,
  HistorySchema,
  TeamSchema
]
export const resolvers = [
  rootResolvers,
  SessionResolvers,
  RolResolvers,
  UserResolvers,
  CategoryResolvers,
  EventResolvers,
  CommentResolvers,
  HistoryResolvers,
  TeamResolvers
]