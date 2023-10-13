import casual from 'casual'
import { notification } from '..'
import { AllowedCategories } from '../../types/category'
import { user } from '../user/resolvers'

import type { Props } from '../../types/'
import type CategoryProps from '../../types/category'
import type UserProps from '../../types/user'

export const allowedCategories: CategoryProps['name'][] = Object.values(AllowedCategories).reduce((acc: CategoryProps['name'][], curr) => {
  // @ts-ignore
  if (typeof curr === 'string') acc.push(curr)
  return acc
}, [])

export const category = ({ id, name, isActive }: Pick<CategoryProps, 'id' | 'name' | 'isActive'>) => ({
  id,
  name: name ?? allowedCategories[id],
  isActive: isActive ?? casual.boolean,
  picture: 'https://loremflickr.com/320/240/night,party/all',
  description: casual.description,
  followers: casual.array_of_digits(5),
  likes: casual.array_of_digits(12),
  tags: casual.array_of_words(3),
  created_date: casual.date(),
  updated_date: casual.date()
})

export default {
  Query: {
    getAllCategories: async (_: unknown, { isActive }: Props<boolean, undefined>) => {
      const data = allowedCategories.map((name, id) => category({ id, name, isActive }));
      return { data, notification: notification.success }
    },
    getCategoryById: async (_: unknown, { id }: { id: CategoryProps['id'] }) => {
      const res = category({ id, name: allowedCategories[id] })
      const categoryFound = Boolean(res.name)
      return { data: categoryFound ? res : {}, notification: categoryFound ? notification.success : notification.error }
    }
  },
  Category: {
    followers: async ({ followers }: { followers: UserProps['id'][] }, _args: any, { auth }: { auth?: boolean }) => {
      if (!auth) { return followers }
      return followers.map((id: UserProps['id']) => user({ id }))
    },
    likes: async ({ likes }: { likes: UserProps['id'][] }, _args: any, { auth }: { auth?: boolean }) => {
      if (!auth) { return likes }
      return likes.map((like: UserProps['id']) => user({ id: like }))
    },
  }
}
