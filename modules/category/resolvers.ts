const categories = require('../../__mocks__/categories.json')

export default {
  Query: {
    getAllCategories: async (_: unknown, { isActive }: { isActive?: boolean }) => {
      let data: [] = []
      if (isActive) {
        data = await categories.filter((category: any) => category.isActive)
      } else { data = await categories }
      return { data }
    },
    getCategoryById: async (_: unknown, { id }: { id: string }, contextValue: any) => {
      console.log({ id, contextValue });
      let category: any = await categories.find((category: { id: string | number }) => category.id == id)
      let data: any[] = []
      if (category) {
        data.push(category)
      }
      return { data }
    }
  }
}
