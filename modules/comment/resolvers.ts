import casual from 'casual'
const bd_comments = require('../../__mocks__/comments.json')

export default {
  Query: {
    getCommentsByUser: async (_: unknown, { userId }: { userId?: number }, { token }: any) => {
      // if (userId && token) {
      const comments = await bd_comments.filter((comment: any) => comment.userId == userId)
      // }
      return comments
    },
    getCommentById: async (_: unknown, { id }: { id: string }, { token }: any) => {
      let data: any[] = []
      let comment: {} = bd_comments.find((comment: { id: string | number }) => comment.id == id)
      if (comment) {
        data.push(comment)
      }
      return { data }
    }
  },
  Comment: {
    /* userId: async ({ userId }: { userId: string }) => await bd_users.find((user: any) => user.id == userId) */
    userId: async () => ({
      id: casual.uuid,
      name: casual.name,
      email: casual.email,
      password: casual.password,
      rol: casual.integer(1, 3),
      phone: casual.phone,
      avatar: 'https://i.pravatar.cc/100',
    })
  }
}
