import casual from 'casual';
import { notification } from '..';
import { user } from '../user/resolvers';

export const comment = (id: number) => ({
  id: casual.integer(1, 3),
  userId: id,
  categoryId: casual.integer(1, 3),
  text: casual.description,
  isAvailable: casual.boolean,
  created_date: casual.date(),
})
const comments = Array.from({ length: 5 }, () => comment(casual.integer(1, 3)))
export default {
  Query: {
    getCommentsByUser: async (_: unknown, { userId }: { userId?: number }, { token }: any) => {
      if (userId && token) {
        const commentsByUser = comments.filter((comment: any) => comment.userId == userId)
      return { data: commentsByUser, notification: notification.success }
      }
      return { data: [], notification: notification.error }
    },
    getCommentById: async (_: unknown, { id }: { id: string }, { token }: any) => {
      const commentById = comments.find((comment: any) => comment.id == id)
      return { data: commentById, notification: commentById ? notification.success : notification.error }
    }
  },
  Comment: {
    userId: async ({ userId }: { userId: string }) => user(userId),
  }
}
