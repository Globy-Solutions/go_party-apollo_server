const mock = require('../../__mocks__/events.json')

export default {
  Query: {
    getAllEvents: async () => await mock,
    getEventById: async (_: any,{ id }: { id: string }) => await mock.find((event: any) => event.id = id)
  }
}
