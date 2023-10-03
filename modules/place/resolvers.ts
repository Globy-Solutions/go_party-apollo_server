import casual from 'casual'
import { PubSub } from 'graphql-subscriptions'
import { notification } from '..'
import { allowedCategories, category } from '../category/resolvers'
import { comment } from '../comment/resolvers'
import { event } from '../event/resolvers'
import { user } from '../user/resolvers'

import type { Props } from '../../types/'
import type CommentProps from '../../types/comments'
import type EventProps from '../../types/events'
import type PlaceProps from '../../types/place'
import type UserProps from '../../types/user'

const pubsub = new PubSub()
export const place = ({ id, by, isActive }: Props<string, string>) => ({
  id: id ?? casual.uuid,
  isActive: isActive ?? casual.boolean,
  name: casual.title,
  description: casual.description,
  webSite: casual.url,
  image: casual.integer(0, 2),
  pictures: Array.from({ length: 3 }, () => 'https://loremflickr.com/320/240/night,party/all'),
  address: casual.address,
  latitude: casual.latitude,
  longitude: casual.longitude,
  events: Array.from({ length: 3 }, () => casual.uuid),
  followeds: casual.array_of_digits(3),
  followers: casual.array_of_digits(3),
  comments: casual.array_of_digits(3),
  likes: casual.array_of_digits(3),
  goinTo: casual.array_of_digits(3),
  tags: casual.array_of_words(3),
  created_by: by ?? casual.uuid,
  created_date: casual.date(),
  updated_date: casual.date(),
})

export default {
  Query: {
    getAllPlaces: async (_: unknown, { isActive, by }: Props<boolean, string>) => {
      const data = Array.from({ length: 3 }, () => place({ isActive, by }))
      return { data, notification: notification.success }
    },
    getPlaceById: async (_: any, { id }: { id: string }) => ({ data: place({ id }), notification: notification.success })
  },
  Place: {
    created_by: async ({ created_by }: { created_by: PlaceProps['created_by'] }) => user({ id: created_by }),
    categoryId: async () => {
      const id = casual.integer(0, allowedCategories.length)
      return category({
        id, name: allowedCategories[id],
      })
    },
    comments: async ({ comments }: { comments: CommentProps['id'][] }) => {
      return comments.map((id: CommentProps['id']) => comment({ id }))
    },
    followeds: async ({ followeds }: { followeds: UserProps['id'][] }, _args: any, { auth }: { auth?: boolean }) => {
      if (!auth) { return followeds }
      return followeds.map((id: UserProps['id']) => user({ id }))
    },
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
    events: async ({ events }: { events: EventProps['id'][] }) => events.map((id: EventProps['id']) => event({ id }))
  },
  Mutation: {
    createPlace: async (_: unknown,
      { input }: { input: Partial<PlaceProps> },
      { auth }: { auth: boolean }
    ) => {
      if (auth) {
        input.id = casual.uuid
        input.created_date = casual.date()
        input.updated_date = casual.date()
        if (input.isActive === undefined) { input.isActive = true }
        if (input.image === undefined) { input.image = 0 }
        return { data: input, notification: notification.success }
      }
      pubsub.publish('NEW_PLACE', {});
      return { notification: notification.warning }
    }
  },
  Subscription: {
    newPlace() {
      console.log('NEW_PLACE');
      return null
    }
  }
}
