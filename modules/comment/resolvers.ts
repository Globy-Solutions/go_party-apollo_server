const comments = require('../../__mocks__/comments.json')

export default {
  Query: {
    getCommentsByUser: async (_: unknown, { userId }: { userId?: number }, { token }: any) => {
      let data: [] = []
      if (userId && token) {
        data = await comments.filter((comment: any) => comment.userId == userId)
      }
      return { data }
    },
    getCommentById: async (_: unknown, { id }: { id: string }, { token }: any) => {
      let data: any[] = []
      let comment: {} = comments.find((comment: { id: string | number }) => comment.id == id)
      if (comment) {
        data.push(comment)
      }
      return { data }
    }
  }
}
