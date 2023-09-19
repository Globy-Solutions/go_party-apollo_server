import casual from 'casual';
import { notification } from '..';

export default {
  Query: {
    signIn: async (_: any, { password }:
      { password: string }) => {
      let data: any = null;
      let session: any = null;
      if (password == '123456') {
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
    session: async () => {
      const session = {
        accessToken: casual.uuid,
        expiresIn: casual.integer(1, 100),
        idToken: casual.uuid,
        refreshToken: casual.uuid,
        tokenType: casual.uuid,
      }
      return session
    },
    data: async (_parent: any, _args: any, _context: any, { variableValues: { email } }: any) => {
      const data = {
        id: casual.uuid,
        name: casual.name,
        email: casual.email,
        password: casual.password,
        rol: casual.integer(1, 3),
        phone: casual.phone,
        avatar: 'https://i.pravatar.cc/100',
      }
      return data
    }
  }
}
