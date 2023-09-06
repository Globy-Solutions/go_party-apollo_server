import { default as SessionResolvers } from './session/resolvers';
import { default as SessionSchema } from './session/schema';

import { default as CategoryResolvers } from './category/resolvers';
import { default as CategorySchema } from './category/schema';
import { default as EventResolvers } from './event/resolvers';
import { default as EventSchema } from './event/schema';
import { default as UserResolvers } from './user/resolvers';
import { default as UserSchema } from './user/schema';

const rootTypeDefs = `
  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type Query implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    hello: String
  }
`;

const rootResolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

export const typeDefs = [
  rootTypeDefs,
  SessionSchema,
  UserSchema,
  CategorySchema,
  EventSchema
]
export const resolvers = [
  rootResolvers,
  SessionResolvers,
  CategoryResolvers,
  UserResolvers,
  EventResolvers
]