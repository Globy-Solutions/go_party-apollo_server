const mock = require('../../__mocks__/users.json')

export default {
  Query: {
    getAllUsers: async () => await mock,
    getUserById: async (_: any,{ id }: { id: string }) => await mock.find((user: any) => user.id = id)
  }
}
