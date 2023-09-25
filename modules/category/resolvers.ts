import casual from 'casual'
import { notification } from '..'
import { AllowedCategories } from '../../types/category'

import type CategoryProps from '../../types/category'
import type UserProps from '../../types/user'

type CategoryRegisterd = {
  id: CategoryProps['id']
  name: CategoryProps['name']
}

const allowedCategories: CategoryProps['name'][] = Object.values(AllowedCategories).reduce((acc: CategoryProps['name'][], curr) => {
  // @ts-ignore
  if (typeof curr === 'string') acc.push(curr)
  return acc
}, [])

export const category = ({ id, name }: any) => ({
  id,
  name: name ?? allowedCategories[id],
  isActive: casual.boolean,
  picture: 'https://loremflickr.com/320/240/night,party/all',
  description: casual.description,
  created_by: casual.uuid,
  created_date: casual.date(),
  updated_date: casual.date()
})

export default {
  Query: {
    getAllCategories: async (_: unknown,
      { isActive, by }: { isActive?: CategoryProps['isActive']; by?: UserProps['id'] }
    ) => {
      let data: CategoryProps[] = allowedCategories.map((name, id) => category({ name, id }));
      if (isActive) {
        data = data.filter((category) => category.isActive)
      }
      return { data, notification: notification.success }
    },
    getCategoryById: async (_: unknown, { id }: { id: CategoryProps['id'] }) => {
      const res: CategoryProps = category({ id })
      const categoryFound = Boolean(res.name)
      return { data: categoryFound ? res : {}, notification: categoryFound ? notification.success : notification.error }
    }
  }
}
