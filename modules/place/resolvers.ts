import casual from 'casual';
import { PubSub } from 'graphql-subscriptions';
import { notification } from '..';
import { user } from '../user/resolvers';

import type PlaceProps from '../../types/place';

const pubsub = new PubSub()
const place = (id?: PlaceProps['id']) => ({
  id: id ?? casual.uuid,
  name: casual.title,
  description: casual.description,
  isActive: casual.boolean,
  image: casual.url,
  address: casual.address,
  latitude: casual.latitude,
  longitude: casual.longitude,
  created_by: user().id,
  created_date: casual.date(),
  updated_date: casual.date()
})

export default {
  Query: {
    getAllPlaces: async (_: unknown, { isActive, by }: { isActive?: boolean; by?: string }) => {
      console.log({ isActive, by });
      const places = Array.from({ length: 3 }, () => place());
      return { data: places, notification: notification.success }
    },
    getPlaceById: async (_: any, { id }: { id: string }) => 
      ({ data: place(id), notification: notification.success })
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
