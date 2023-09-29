import casual from 'casual'
import { PubSub } from 'graphql-subscriptions'
import { notification } from '..'
import { allowedCategories, category } from '../category/resolvers'
import { user } from '../user/resolvers'

import type { Props } from '../../types/'
import type PlaceProps from '../../types/place'

const pubsub = new PubSub()
const randomId = casual.integer(0, allowedCategories.length)
const place = ({ id, by, isActive }: Props<string, string>) => ({
  id: id ?? casual.uuid,
  isActive: isActive ?? casual.boolean,
  created_by: by ? by : user({ id: casual.uuid }).id,
  name: casual.title,
  description: casual.description,
  webSite: casual.url,
  image: 'https://loremflickr.com/320/240/night,party/all',
  address: casual.address,
  latitude: casual.latitude,
  created_date: casual.date(),
  updated_date: casual.date(),
  longitude: casual.longitude,
  category: category({ id: randomId, name: allowedCategories[randomId], created_date: casual.date() })
})

export default {
  Query: {
    getAllPlaces: async (_: unknown, { isActive, by }: Props<string, string>) => {
      const data = Array.from({ length: 3 }, () => place({ by, isActive }))
      return { data, notification: notification.success }
    },
    getPlaceById: async (_: any, { id }: { id: string }) =>
      ({ data: place({ id }), notification: notification.success })
  },
  Mutation: {
    createPlace: async (_: unknown,
      { input }: { input: Partial<PlaceProps> },
      { auth }: { auth: boolean }
    ) => {
      console.log('createPlace', input);
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
    newPlace() {
      pubsub.publish('PLACE_PUBLISHED', {});
      return null
    }
  }
}
