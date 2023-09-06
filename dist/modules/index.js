import { default as EventResolvers } from './event/resolvers';
import { default as EventSchema } from './event/schema';
import { default as UserResolvers } from './user/resolvers';
import { default as UserSchema } from './user/schema';
const rootTypeDefs = `
  type Query {
    hello: String
  }
`;
const rootResolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
};
export const typeDefs = [rootTypeDefs, UserSchema, EventSchema];
export const resolvers = [rootResolvers, UserResolvers, EventResolvers];
