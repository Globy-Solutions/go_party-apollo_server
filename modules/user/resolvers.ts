import casual from 'casual'
import { notification } from '..'

import type UserProps from '../../types/user'

const roles = require('../../__mocks__/roles.json')
export const users = [
  {
    rol: 1,
    password: '123',
    email: 'rrpp@go_party.fun',
  },
  {
    rol: 2,
    password: '123',
    email: 'leader@go_party.fun',
  },
  {
    rol: 3,
    password: '123',
    email: 'organizator@go_party.fun',
  },
  {
    rol: 4,
    password: '123',
    email: 'owner@go_party.fun',
  }
]
export const user = (
  id?: UserProps['id'],
  email?: UserProps['email']
) => ({
  id: id || casual.uuid,
  name: casual.name,
  email: email || casual.email,
  rol: email ? users.find(
    (user) => user.email === email)?.rol || 0 : 0,
  phone: casual.phone,
  avatar: casual.random_element([
    'https://robohash.org/7TQ.png',
    'https://robohash.org/MLS.png',
    'https://robohash.org/GBA.png',
    'https://robohash.org/5JZ.png',
    'https://robohash.org/NIA.png'
  ]),
  created_date: casual.date('YYYY-MM-DD'),
  updated_date: casual.date('YYYY-MM-DD')
})
export default {
  Query: {
    getUserById: async (_: any, { id }: { id: UserProps['id'] }, { auth }: { auth?: boolean }) => {
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
