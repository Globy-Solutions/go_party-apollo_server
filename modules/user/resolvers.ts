import casual from 'casual'
import { notification } from '..'
const roles = require('../../__mocks__/roles.json')

export default {
  Query: {
    getUserById: async (_: any, { id }: { id: string }, { auth }: any) => {
      let data: any = null
      if (auth) {
        data = {
          id: casual.uuid,
          name: casual.name,
          email: casual.email,
          password: casual.password,
          rol: casual.integer(1, 3),
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
