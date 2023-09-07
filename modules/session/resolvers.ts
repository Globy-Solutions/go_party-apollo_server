const mock = require('../../__mocks__/users.json')

export default {
  Query: {
    signIn: async (_: any, { email, password }:
      { email: string, password: string }) => {
      const data = await mock.find((user: any) => user.email === email && user.password === password)
      if (data) {
        const session = {
          accessToken: '12312312123123',
          expiresIn: 3600,
          idToken: 'sdfsdfsr45345',
          refreshToken: 'sdfsfe4t5465',
          tokenType: '098s90fsd98f9s0d8f',
        }
        return { data, session, notification: { type: 'success', message: 'SignIn successfully' } }
      }
      return { data, notification: { type: 'error', message: 'SignIn failed' } }
    }
  },
  Mutation: {
    signOut: async (_: any, { id, accessToken, idToken } :
      { id: string, accessToken: string, idToken: string }) => {
      console.log('signOut', id, accessToken, idToken);
      return { notification: { type: 'success', message: 'SignOut successfully' } }
    }
  }
}
