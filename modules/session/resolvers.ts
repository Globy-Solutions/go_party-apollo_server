import casual from 'casual';
import { notification } from '..';
import { user, users } from '../user/resolvers';

import type UserProps from '../../types/user';
import type { UserRegisterd } from '../user/resolvers';

type VariableValuesProps = {
  variableValues: Pick<UserProps, 'email' | 'password'>
}

const testPassword: string = '123';
export default {
  Query: {
    signIn: async (_: any, { email, password }: VariableValuesProps['variableValues']) => (
      { notification: (email && password === testPassword) ? notification.success : notification.error }
    )
  },
  SignIn: {
    data: async (_parent: any, _args: any, _context: any, {
      variableValues: { email, password } }: VariableValuesProps
    ) => {
      if (!email || !password) return null
      if (password !== testPassword) return null
      const userFinded = users.find((user) => user.email === email.toLowerCase())
      if (userFinded) {
        const { email, rol }: UserRegisterd = userFinded
        const data = user({ email, rol })
        return data
      }
      return user({ email, rol: 0 })
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
