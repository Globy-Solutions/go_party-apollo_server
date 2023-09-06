const mock = require('../../__mocks__/users.json');
export default {
    Query: {
        getAllUsers: async () => await mock,
        getUserById: async (_, { id }) => await mock.find((user) => user.id = id)
    }
};
