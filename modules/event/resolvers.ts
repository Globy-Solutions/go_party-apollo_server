const events = require('../../__mocks__/events.json')
const logged = require('../../__mocks__/events_logged.json')

export default {
  Query: {
    getAllEvents: async (_: unknown, { isActive }: { isActive?: boolean }, { token }: any) => {
      let data: [] = []
      if (isActive) {
        if (token) {
          data = await logged.filter((event: any) => event.isActive)
        } else {
          data = await events.filter((event: any) => event.isActive)
        }
      } else { data = await events }
      return { data }
    },
    getEventById: async (_: unknown, { id }: { id: string }, { token }: any) => {
      let data: any[] = []
      let event: any = {}
      if (token) {
        event = await logged.find((event: { id: string | number }) => event.id == id)
      } else {
        event = await events.find((event: { id: string | number }) => event.id == id)
      }
      if (event) {
        data.push(event)
      }
      return { data }
    }
  }
}
