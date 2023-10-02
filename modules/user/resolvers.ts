import casual from 'casual'
import { notification } from '..'
import { AllowedRoles } from '../../types/rol'
import { roles } from '../rol/resolvers'

import type RolProps from '../../types/rol'
import type UserProps from '../../types/user'

export type UserRegisterd = {
  id?: UserProps['id']
  rol?: RolProps | RolProps['id']
  email?: UserProps['email']
}
export const users: UserRegisterd[] = [
  {
    rol: 0,
    email: 'user@go_party.fun',
  },
  {
    rol: 1,
    email: 'rrpp@go_party.fun',
  },
  {
    rol: 2,
    email: 'leader@go_party.fun',
  },
  {
    rol: 3,
    email: 'organizator@go_party.fun',
  },
  {
    rol: 4,
    email: 'owner@go_party.fun',
  }
]
const name = casual.name
export const user = ({ id, email, rol }: UserRegisterd) => ({
  id: id ?? casual.uuid,
  name: id ? name : casual.name,
  email: email ?? casual.email,
  rol: rol ?? casual.random_element(
    Array.from({ length: Object.values(AllowedRoles).length }, (_, i) => i)
  ),
  phone: casual.phone,
  isActive: casual.boolean,
  password: casual.password,
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
    getAllUsers: async () => {
      const data = users.map(({ email, rol }) => user({ email, rol }))
      return { data, notification: notification.success }
      // return { data: Array.from({ length: 3 }, () => user({})), notification: notification.success }
    },
    getUserById: async (_: any, { id }: { id: UserProps['email'] }) => {
      const userFinded = users.find((user) => user.email === id)
      if (userFinded) {
        const { email, rol }: UserRegisterd = userFinded
        const data = user({ email, rol })
        return {
          data,
          notification: notification.success
        }
      }
      return {
        data: {},
        notification: notification.warning
      }
    }
  },
  User: {
    rol: async ({ rol }: { rol: RolProps['id'] }) => {
      return roles()[rol]
    }
  },
  Mutation: {
    createUser: async (_: unknown,
      { input }: { input: Partial<UserProps> },
    ) => {
      input.id = casual.uuid
      input.created_date = casual.date()
      input.updated_date = casual.date()
      return { data: input, notification: notification.success }
    }
  }
}
