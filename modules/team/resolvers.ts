import casual from 'casual';
import { notification } from '..';
import { event } from '../event/resolvers';
// import { user } from '../user/resolvers';

const roles = require('../../__mocks__/roles.json')
const team = () => ({
  id: casual.uuid,
  name: casual.title,
  members: [], // Array.from({ length: 3 }, () => user(casual.integer(1, 3))),
  isActive: casual.boolean,
  events: Array.from({ length: 3 }, () => {
    const { id, title, isActive } = event()
    return { id, title, isActive }
  }),
  created_by: "1",
  created_date: casual.date(),
  updated_date: casual.date()
})

export default {
  Query: {
    getAllTeams: async (_: unknown, { isActive, by }: { isActive?: boolean; by?: string }) => {
      console.log({ isActive, by });
      const teams = Array.from({ length: 3 }, () => team());
      return { data: teams, notification: notification.success }
    },
    getTeamById: async (_: any, { id }: { id: string }, { auth }: { auth?: boolean }) => {
      let data: any = null
      if (auth) {
        data = {
          id: casual.uuid,
          name: casual.name,
          email: casual.email,
          password: casual.password,
          // rol: casual.integer(1, 4),
          rol: 3,
          phone: casual.phone,
          avatar: 'https://i.pravatar.cc/100',
        }
      }
      return { data, notification: !data ? notification.error : notification.success }
    }

  },
  User: {
    rol: async ({ rol }: { rol: number }) => await roles.find((availablesRoles: any) => availablesRoles.id == rol)
  }
}
