import casual from 'casual';
import { PubSub } from 'graphql-subscriptions';
import { notification } from '..';
import { allowedCategories, category } from '../category/resolvers';
import { comment } from '../comment/resolvers';
import { user } from '../user/resolvers';

import type { Props } from '../../types/';
import type CategoryProps from '../../types/category';
import type CommentProps from '../../types/comments';
import type EventProps from '../../types/events';
import type UserProps from '../../types/user';

const pubsub = new PubSub()
export const event = ({ id, by, isActive }: Props<string, string>) => ({
  id: id ?? casual.uuid,
  title: casual.title,
  name: casual.name,
  categoryId: casual.integer(1, allowedCategories.length),
  image: casual.integer(1, 3),
  pictures: Array.from({ length: 3 }, () => 'https://loremflickr.com/320/240/night,party/all'),
  videos: Array.from({ length: 3 }, () => casual.url),
  price: casual.integer(1000, 3000),
  address: casual.address,
  about: casual.description,
  latitude: Number(casual.latitude),
  longitude: Number(casual.longitude),
  tags: casual.array_of_words(3),
  followers: casual.array_of_digits(3),
  likes: casual.array_of_digits(3),
  goinTo: casual.array_of_digits(3),
  comments: casual.array_of_digits(3),
  created_by: by ? by : user({ id: casual.uuid }).id,
  isActive: isActive ?? casual.boolean,
  created_date: casual.date(),
  updated_date: casual.date()
})

export default {
  Query: {
    getAllEvents: async (_: unknown, { isActive, by }: Props<boolean, string>) => {
      let data: EventProps[] = []
      if (by) {
        data = Array.from({ length: 3 }, () => event({ isActive, by }))
      }
      return { data: Array.from({ length: 3 }, () => event({})), notification: notification.success }

    },
    getEventById: async (_: unknown, { id }: { id: EventProps['id'] }) => {
      let eventFound = {}
      if (id) {
        eventFound = event({})
      }
      return { data: eventFound, notification: Object.keys(eventFound).length < 0 ? notification.error : notification.success }
    }
  },
  Event: {
    categoryId: async ({ categoryId }: { categoryId: CategoryProps['id'] }, _args: any, { auth }: { auth?: boolean }) => {
      if (auth) {
        const res: CategoryProps = category({ id: categoryId, name: allowedCategories[categoryId] })
        const categoryFound = Boolean(res.name)
        return { data: categoryFound ? res : {}, notification: categoryFound ? notification.success : notification.error }
      }
      return []
    },
    followers: async ({ followers }: { followers: UserProps[] }, _args: any, { auth }: { auth?: boolean }) => {
      if (auth) {
        return followers.map(({ id }: { id: UserProps['id'] }) => user({ id }))
      }
      return []
    },
    likes: async ({ likes }: { likes: UserProps[] }, _args: any, { auth }: { auth?: boolean }) => {
      if (auth) {
        return likes.map(({ id }: { id: UserProps['id'] }) => user({ id }))
      }
      return []
    },
    goinTo: async ({ goinTo }: { goinTo: UserProps[] }, _args: any, { auth }: { auth?: boolean }) => {
      if (auth) {
        return goinTo.map(({ id }: { id: UserProps['id'] }) => user({ id }))
      }
      return []
    },
    comments: async ({ comments }: { comments: CommentProps[] }, _args: any, { auth }: { auth?: boolean }) => {
      if (auth) {
        return comments.map(({ id }: { id: CommentProps['id'] }) => comment({ id }))
      }
      return []
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
