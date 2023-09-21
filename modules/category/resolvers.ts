import casual from 'casual'
import { notification } from '..'
import { user } from '../user/resolvers'
import CategoryProps from './category-props'

export const category = () => ({
  id: casual.integer(1, 3),
  name: casual.title,
  isActive: casual.boolean,
  picture: 'https://loremflickr.com/320/240/night,party/all',
  description: casual.description,
  created_by: user(casual.integer(1, 3)).id,
  created_date: casual.date(),
  updated_date: casual.date()
})

export default {
  Query: {
    getAllCategories: async (_: unknown, { isActive }: { isActive?: boolean }) => {
      let data: CategoryProps[] = []
      const categories: CategoryProps[] = Array.from({ length: 3 }, () => category());
      if (isActive) {
        data = categories.filter((category: any) => category.isActive)
      } else { data = categories }
      return { data, notification: notification.success }
    },
    getCategoryById: async (_: unknown, { id }: { id: string }) => {
      return { data: category(), notification: notification.success }
    }
  }
}
