import casual from 'casual';
import { notification } from '..';
import { user } from '../user/resolvers';

const testPassword = '123456';
export default {
  Query: {
    signIn: async (_: any, { password }:
      { password: string }) => {
      let data: any = null;
      let session: any = null;
      console.log('signIn', password);
      if (password === testPassword) {
        return { data, session, notification: notification.success }
      }
      return { data, session, notification: notification.error }
    }
  },
  Mutation: {
    signOut: async (_: any, { id, accessToken, idToken }:
      { id: string, accessToken: string, idToken: string }) => {
      console.log('signOut', id, accessToken, idToken);
      return { notification: { type: 'success', message: 'SignOut successfully' } }
    }
  },
  SignIn: {
    session: async (_parent: any, _args: any, _context: any, { variableValues: { password } }: any) =>
      password == testPassword ? ({
        accessToken: casual.uuid,
        expiresIn: casual.integer(1, 100),
        idToken: casual.uuid,
        refreshToken: casual.uuid,
        tokenType: casual.uuid,
      }) : null
    ,
    data: async (_parent: any, _args: any, _context: any, { variableValues: { password, email } }: any) =>
      password == testPassword ? user() : null
  }
}
