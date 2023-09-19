import { notification } from '..'

const categories = require('../../__mocks__/categories.json')

export default {
  Query: {
    getAllCategories: async (_: unknown, { isActive }: { isActive?: boolean }) => {
      let data: [] = []
      if (isActive) {
        data = await categories.filter((category: any) => category.isActive)
      } else { data = await categories }
      return { data, notification: notification.success }
    },
    getCategoryById: async (_: unknown, { id }: { id: string }) => {
      let category: any = await categories.find((category: { id: string | number }) => category.id == id)
      return { data: category, notification: category ? notification.error : notification.success }
    }
  }
}
