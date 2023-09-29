import casual from 'casual'
import { notification } from '..'
import { AllowedCategories } from '../../types/category'

import type CategoryProps from '../../types/category'

export const allowedCategories: CategoryProps['name'][] = Object.values(AllowedCategories).reduce((acc: CategoryProps['name'][], curr) => {
  // @ts-ignore
  if (typeof curr === 'string') acc.push(curr)
  return acc
}, [])

export const category = ({ id, name }: CategoryProps) => ({
  id,
  name: name ?? allowedCategories[id],
  picture: 'https://loremflickr.com/320/240/night,party/all',
  description: casual.description,
  created_date: casual.date(),
  updated_date: casual.date()
})

export default {
  Query: {
    getAllCategories: async () => {
      const data: CategoryProps[] = allowedCategories.map((name, id) => category({ id, name }));
      return { data, notification: notification.success }
    },
    getCategoryById: async (_: unknown, { id }: CategoryProps) => {
      const res: CategoryProps = category({ id, name: allowedCategories[id] })
      const categoryFound = Boolean(res.name)
      return { data: categoryFound ? res : {}, notification: categoryFound ? notification.success : notification.error }
    }
  }
}
