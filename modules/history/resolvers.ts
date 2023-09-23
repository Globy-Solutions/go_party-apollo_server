import casual from 'casual';
import { notification } from '..';
import UserProps from '../../types/user';
import { comment } from '../comment/resolvers';
import { event } from '../event/resolvers';
import { user } from '../user/resolvers';

const history = () => ({
  events: Array.from({ length: 3 }, () => {
    const { id, name, image, pictures } = event()
    return { id, name, image, pictures }
  }),
  comments: Array.from({ length: 3 }, () => {
    const { id, text } = comment()
    return { id, text }
  }),
  followeds: Array.from({ length: 3 }, () => {
    const { id, name, avatar } = user()
    return { id, name, avatar }
  }),
  followers: Array.from({ length: 3 }, () => {
    const { id, name, avatar } = user()
    return { id, name, avatar }
  }),
  created_date: casual.date(),
  updated_date: casual.date()
})
// TODO, the user history must be updated each time the user add a new event, comment, follow or follower, and save it in the database
export default {
  Query: {
    history: async (_: any, { userId }: { userId: UserProps['id'] }, { auth }: { auth?: boolean }) => {
      if (userId && auth) {
        const data = history()
        return { data, notification: notification.success }
      }
      return { data: [], notification: notification.success }
    }
  }
}
