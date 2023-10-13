import casual from 'casual'
import { notification } from '..'
import { allowedCategories, category } from '../category/resolvers'
import { user } from '../user/resolvers'

import type { Props } from '../../types/'
import type { UserRegisterd } from '../user/resolvers'

export const comment = ({ id, by, isActive }: Props<string, string>) => ({
  id: id ?? casual.uuid,
  isActive: isActive ?? casual.boolean,
  created_by: by ? by : user({ id: casual.uuid }).id,
  categoryId: casual.integer(1, allowedCategories.length),
  text: casual.text,
  created_date: casual.date()
})
export default {
  Query: {
    getCommentsByUser: async (_: unknown, { userId }: { userId: string }) => {
      if (userId) {
        const data = Array.from({ length: 3 }, () => comment({ by: userId }))
        return { data, notification: notification.success }
      }
      return { data: [], notification: notification.error }
    },
    getCommentById: async (_: unknown, { id }: { id: string }) => {
      const data = Array.from({ length: 3 }, () => comment({ id }))
      return { data, notification: data ? notification.success : notification.error }
    }
  },
  Comment: {
    created_by: async ({ userId }: { userId: UserRegisterd['id'] }) => user({ id: userId }).id,
    categoryId: async () => {
      const id = casual.integer(1, allowedCategories.length)
      return category({
        id, name: allowedCategories[id],
      }).id
    }
  }

}
