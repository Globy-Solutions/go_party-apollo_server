const events = require('../../__mocks__/events.json')

export default {
  Query: {
    getAllEvents: async (_: unknown, { isActive }: { isActive?: boolean }) => {
      let data: [] = []
      if (isActive) {
        data = await events.filter((event: any) => event.isActive)
      } else { data = await events }
      return { data }
    },
    getEventById: async (_: unknown, { id }: { id: string }, contextValue: any) => {
      console.log({ contextValue });
      let event: any = await events.find((event: { id: string | number }) => event.id == id)
      let data: any[] = []
      if (event) {
        data.push(event)
      }
      return { data }
    }
  }
}
