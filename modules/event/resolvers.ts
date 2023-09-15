import { PubSub } from 'graphql-subscriptions'

const events = require('../../__mocks__/events.json')
const logged = require('../../__mocks__/events_logged.json')

const pubsub = new PubSub()

export default {
  Query: {
    getAllEvents: async (_: unknown, { isActive }: { isActive?: boolean }, { auth }: any) => {
      let data: [] = []
      if (isActive) {
        if (auth) {
          data = await logged.filter((event: any) => event.isActive)
        } else {
          data = await events.filter((event: any) => event.isActive)
        }
      } else { data = await events }
      return { data }
    },
    getEventById: async (_: unknown, { id }: { id: string }, { auth }: any) => {
      let data: any[] = []
      let event: any = {}
      if (auth) {
        event = await logged.find((event: { id: string | number }) => event.id == id)
      } else {
        event = await events.find((event: { id: string | number }) => event.id == id)
      }
      if (event) {
        data.push(event)
      }
      return { data }
    }
  },
  Subscription: {
    newEvent() {
      pubsub.publish('EVENT_PUBLISHED', {});
      return events[0]
    }
  }
}
