import casual from 'casual'
import { notification } from '..'
const roles = require('../../__mocks__/roles.json')
export const user = (id: number) => ({
  id,
  name: casual.name,
  email: casual.email,
  // rol: casual.integer(1, 4),
  rol: 3,
  phone: casual.phone,
  avatar: 'https://i.pravatar.cc/100',
})
export default {
  Query: {
    getUserById: async (_: any, { id }: { id: number }, { auth }: any) => {
      let data: any = null
      if (auth) {
        data = user(id)
      }
      return { data, notification: !data ? notification.error : notification.success }
    }
      
  },
  User: {
    rol: async ({ rol }: { rol: number }) => await roles.find((availablesRoles: any) => availablesRoles.id == rol)
  }
}
