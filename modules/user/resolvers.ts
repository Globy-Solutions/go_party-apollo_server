import casual from 'casual'
import { notification } from '..'
const roles = require('../../__mocks__/roles.json')
const users = [
  {
    rol: 1,
    email: 'rrpp@vistaprint.com',
  },
  {
    rol: 2,
    email: 'leader@vistaprint.com',
  },
  {
    rol: 3,
    email: 'organizator@vistaprint.com',
  },
  {
    rol: 4,
    email: 'owner@vistaprint.com',
  }
]
export const user = (id?: number, email?: string) => ({
  id: id || casual.integer(1, 100),
  name: casual.name,
  email: email || casual.email,
  rol: email ? users.find((user: any) => user.email === email)?.rol || 0 : 0,
  phone: casual.phone,
  avatar: casual.random_element([
    'https://robohash.org/7TQ.png',
    'https://robohash.org/MLS.png',
    'https://robohash.org/GBA.png',
    'https://robohash.org/5JZ.png',
    'https://robohash.org/NIA.png'
  ]),
})
export default {
  Query: {
    getUserById: async (_: any, { id }: { id: number }, { auth }: { auth?: boolean }) => {
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
