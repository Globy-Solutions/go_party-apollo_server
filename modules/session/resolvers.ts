import casual from 'casual';
import { notification } from '..';
import { user } from '../user/resolvers';

const testPassword: string = '123456';
export default {
  Query: {
    signIn: async (_: any, { password }: { password: string }) => ({ notification: password === testPassword ? notification.success : notification.error })
  },
  SignIn: {
    data: async (_parent: any, _args: any, _context: any, { variableValues: { email, password } }: any) =>
      password == testPassword ? user(undefined, email) : null,
    session: async (_parent: any, _args: any, _context: any, { variableValues: { password } }: any) =>
      password == testPassword ? ({
        accessToken: casual.uuid,
        expiresIn: casual.integer(1, 100),
        idToken: casual.uuid,
        refreshToken: casual.uuid,
        tokenType: casual.uuid,
      }) : null
  },
  Mutation: {
    signOut: async (_: any, { id, accessToken, idToken }:
      { id: string, accessToken: string, idToken: string }) => {
      console.log('signOut', id, accessToken, idToken);
      return { notification: { type: 'success', message: 'SignOut successfully' } }
    }
  }
}
