import casual from 'casual'
import { notification } from '..'
import { AllowedCategories } from '../../types/category'
import { user } from '../user/resolvers'

import type CategoryProps from '../../types/category'
import type UserProps from '../../types/user'

export const category = () => {
  const categories = Object.values(AllowedCategories).reduce((acc: string[], curr) => {
    if (typeof curr === 'string') acc.push(curr)
    return acc
  }, [])

  return {
    id: casual.integer(1, 3),
    name: casual.random_element(categories),
    isActive: casual.boolean,
    picture: 'https://loremflickr.com/320/240/night,party/all',
    description: casual.description,
    created_by: user(casual.uuid).id,
    created_date: casual.date(),
    updated_date: casual.date()
  }
}

export default {
  Query: {
    getAllCategories: async (_: unknown,
      { isActive, by }: { isActive?: CategoryProps['isActive']; by?: UserProps['id'] }
    ) => {
      let data: CategoryProps[] = []
      const categories: CategoryProps[] = Array.from({ length: 3 }, () => category());
      if (isActive) {
        data = categories.filter((category: CategoryProps) => category.isActive)
      } else { data = categories }
      return { data, notification: notification.success }
    },
    getCategoryById: async (_: unknown, { id }: { id: CategoryProps['id'] }) => {
      return { data: category(), notification: notification.success }
    }
  }
}
