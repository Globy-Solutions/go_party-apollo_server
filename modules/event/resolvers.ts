import casual from 'casual';
import { PubSub } from 'graphql-subscriptions';
import { notification } from '..';

const events = require('../../__mocks__/events.json')
const logged = require('../../__mocks__/events_logged.json')

const pubsub = new PubSub()
const user = (id: number) => ({
  id,
  name: casual.name,
  avatar: 'https://i.pravatar.cc/100',
})
const comment = (id: number) => ({
  id: casual.uuid,
  userId: id,
  text: casual.description
})
const event = () => ({
  id: casual.uuid,
  title: casual.title,
  name: casual.name,
  isActive: casual.boolean,
  categoryId: {
    id: casual.integer(1, 3),
  },
  image: casual.integer(1, 3),
  pictures: Array.from({ length: 3 }, () => 'https://loremflickr.com/320/240/night,party/all'),
  videos: [casual.url],
  price: casual.integer(1000, 3000),
  address: casual.address,
  about: casual.description,
  latitude: casual.latitude,
  longitude: casual.longitude,
  tags: casual.array_of_words(3),
  followers: casual.array_of_digits(3),
  likes: casual.array_of_digits(3),
  goinTo: casual.array_of_digits(3),
  comments: casual.array_of_digits(3),
  created_date: casual.date(),
  updated_date: casual.date()
})
export default {
  Query: {
    getAllEvents: async () => {
      const data = Array.from({ length: 3 }, () => event());
      return { data, notification: notification.success }
    },
    getEventById: async (_: unknown, { id }: { id: string }) => {
      let eventFound = {}
      if (id != null || id != undefined) {
        eventFound = event()
      }
      return { data: eventFound, notification: Object.keys(eventFound).length < 0 ? notification.error : notification.success }
    }
  },
  Event: {
    followers: async ({ followers }: { followers: number[] }, _args: any, { auth }: any) => {
      if (auth) {
        const resp = followers.map((_: any, id: number) => user(id))
        return resp
      }
      return followers.map(() => ({}))
    },
    likes: async ({ likes }: { likes: number[] }, _args: any, { auth }: any) => {
      if (auth) {
        const resp = likes.map((_: any, id: number) => user(id))
        return resp
      }
      return likes.map(() => ({}))
    },
    goinTo: async ({ goinTo }: { goinTo: number[] }, _args: any, { auth }: any) => {
      if (auth) {
        const resp = goinTo.map((_: any, id: number) => user(id))
        return resp
      }
      return goinTo.map(() => ({}))
    },
    comments: async ({ comments }: { comments: number[] }, _args: any, { auth }: any) => {
      if (auth) {
        const resp = comments.map((_: any, id: number) => comment(id))
        return resp
      }
      return comments.map(() => ({}))
    }
  },
  Subscription: {
    newEvent() {
      pubsub.publish('EVENT_PUBLISHED', {});
      return events[0]
    }
  }
}
