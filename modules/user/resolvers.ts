const users = require('../../__mocks__/users.json')

export default {
  Query: {
    getAllUsers: async () => await users,
    getUserById: async (_: any, { id }: { id: string }) => await users.find((user: any) => user.id == id)
  }
}
