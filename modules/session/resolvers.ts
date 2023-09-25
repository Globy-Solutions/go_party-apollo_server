import casual from 'casual';
import { notification } from '..';

import type UserProps from '../../types/user';

type VariableValuesProps = {
  variableValues: Pick<UserProps, 'email' | 'password'>
}

const testPassword: string = '123';
export default {
  Query: {
    signIn: async (_: any, { password }: { password: UserProps['password'] }) => ({ notification: password === testPassword ? notification.success : notification.error })
  },
  SignIn: {
    data: async (_parent: any, _args: any, _context: any, {
      variableValues: { email, password } }: VariableValuesProps
    ) => {
      /*
      return users.find((u: Partial<UserProps>) => {
        if (u.password === password && u.email === email) {
          const userLogged = user(undefined, email);
          console.log('userLogged', userLogged);
          return userLogged
        }
      })
      */
      return {
        id: '7630291e-2642-4ee8-9acb-4ed89b85469f',
        name: 'Mr. Travon Goyette',
        email,
        rol: 1,
        phone: '701-922-9793',
        avatar: 'https://robohash.org/5JZ.png',
        created_date: '2004-07-28',
        updated_date: '1991-12-16'
      }
    },
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
    signOut: async (_: any, { id, idToken }:
      { id: string, accessToken: string, idToken: string }) => ({ notification: notification.info })
  }
}
