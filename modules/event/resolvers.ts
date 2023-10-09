import casual from 'casual'
import { PubSub } from 'graphql-subscriptions'
import { notification } from '..'
import { comment } from '../comment/resolvers'
import { user } from '../user/resolvers'

import type { Props } from '../../types/'
import type CommentProps from '../../types/comments'
import type EventProps from '../../types/events'
import type UserProps from '../../types/user'

const pubsub = new PubSub()
export const event = ({ id, by, isActive }: Props<string, string>) => ({
  id: id ?? casual.uuid,
  title: casual.title,
  name: casual.name,
  placeId: casual.uuid,
  image: casual.integer(1, 3),
  pictures: Array.from({ length: 3 }, () => 'https://loremflickr.com/320/240/night,party/all'),
  videos: Array.from({ length: 3 }, () => casual.url),
  price: casual.integer(1000, 3000),
  address: casual.address,
  about: casual.description,
  latitude: Number(casual.latitude),
  longitude: Number(casual.longitude),
  tags: casual.array_of_words(3),
  followers: Array.from({ length: 3 }, () => casual.uuid),
  likes: Array.from({ length: 3 }, () => casual.uuid),
  goinTo: Array.from({ length: 3 }, () => casual.uuid),
  comments: Array.from({ length: 3 }, () => casual.uuid),
  created_by: by ? by : user({ id: casual.uuid }).id,
  isActive: isActive ?? casual.boolean,
  created_date: casual.date(),
  updated_date: casual.date()
})

export default {
  Query: {
    getAllEvents: async (_: unknown, { isActive, by }: Props<boolean, string>) => ({
      notification: notification.success,
      data: Array.from({ length: 3 }, () => event({ isActive, by }))
    }),
    getEventById: async (_: unknown, { id }: { id: EventProps['id'] }) => {
      let eventFound = {}
      if (id) {
        eventFound = event({})
      }
      return {
        data: eventFound,
        notification: Object.keys(eventFound).length < 0 ? notification.error : notification.success
      }
    }
  },
  Event: {
    followers: async ({ followers }: { followers: UserProps['id'][] }, _args: any, { auth }: { auth?: boolean }) => {
      if (!auth) { return followers }
      return followers.map((id: UserProps['id']) => user({ id }))
    },
    likes: async ({ likes }: { likes: UserProps['id'][] }, _args: any, { auth }: { auth?: boolean }) => {
      if (!auth) { return likes }
      return likes.map((like: UserProps['id']) => user({ id: like }))
    },
    goinTo: async ({ goinTo }: { goinTo: UserProps['id'][] }, _args: any, { auth }: { auth?: boolean }) => {
      if (!auth) { return goinTo }
      return goinTo.map((id: UserProps['id']) => user({ id }))
    },
    comments: async ({ comments }: { comments: CommentProps['id'][] }) => {
      return comments.map((id: CommentProps['id']) => comment({ id }))
    }
  },
  Mutation: {
    createEvent: async (_: unknown,
      { input }: { input: Partial<EventProps> },
      { auth }: { auth: boolean }
    ) => {
      if (auth) {
        input.id = casual.uuid
        input.created_date = casual.date()
        input.updated_date = casual.date()
        return { data: input, notification: notification.success }
      }
      return { notification: notification.warning }
    }
  },
  Subscription: {
    newEvent() {
      pubsub.publish('EVENT_PUBLISHED', {});
      return null
    }
  }
}
