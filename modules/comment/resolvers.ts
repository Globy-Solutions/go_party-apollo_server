import casual from 'casual';
import { notification } from '..';
import { UserRegisterd, user } from '../user/resolvers';

import type CommentProps from '../../types/comments';
import type UserProps from '../../types/user';

export const comment = (id?: CommentProps['id']) => ({
  id: casual.integer(1, 3),
  userId: id ?? casual.integer(1, 3),
  categoryId: casual.integer(1, 3),
  text: casual.description,
  isActive: casual.boolean,
  created_date: casual.date(),
})
const comments = Array.from({ length: 5 }, () => comment(casual.uuid))
export default {
  Query: {
    getCommentsByUser: async (_: unknown, { userId }: { userId?: UserProps['id'] }, { token }: any) => {
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
    userId: async ({ userId }: { userId: UserRegisterd['id'] }) => user({ id: userId }),
  }
}
