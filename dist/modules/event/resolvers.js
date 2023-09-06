const mock = require('../../__mocks__/events.json');
export default {
    Query: {
        getAllEvents: async () => await mock,
        getEventById: async (_, { id }) => await mock.find((event) => event.id = id)
    }
};
