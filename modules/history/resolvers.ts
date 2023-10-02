import casual from 'casual'
import { notification } from '..'
import { comment } from '../comment/resolvers'
import { event } from '../event/resolvers'
import { place } from '../place/resolvers'
import { user } from '../user/resolvers'

import type UserProps from '../../types/user'

// TODO, the user history must be updated each time the user add a new event, comment, follow or follower, and save it in the database
export default {
  Query: {
    history: async (_: any, { userId }: { userId: UserProps['id'] }, { auth }: { auth?: boolean }) => {
      if (userId && auth) {
        // const data = history()
        return { data: [], notification: notification.success }
      }
      return { data: [], notification: notification.success }
    }
  },
  History: {
    events: async () => Array.from({ length: 3 }, () => {
      const { id, name, image, pictures } = event({})
      return { id, name, image, pictures }
    }),
    places: async (_parent: any, _args: any, { auth }: { auth?: boolean }) => {
      if (!auth) { return [] }
      return Array.from({ length: 3 }, () => place({ by: casual.uuid }))
    },
    comments: async (_parent: any, _args: any, { auth }: { auth?: boolean }) => {
      if (!auth) { return [] }
      return Array.from({ length: 3 }, () => comment({ id: casual.uuid }))
    },
    followeds: async (_parent: any, _args: any, { auth }: { auth?: boolean }) => {
      if (!auth) { return [] }
      return Array.from({ length: 3 }, () => {
        return user({})
      })
    },
    followers: async (_parent: any, _args: any, { auth }: { auth?: boolean }) => {
      if (!auth) { return [] }
      return Array.from({ length: 3 }, () => {
        return user({})
      })
    },
    created_date: async () => casual.date(),
    updated_date: async () => casual.date()
  }
}
