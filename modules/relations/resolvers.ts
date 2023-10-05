import casual from 'casual'
import { notification } from '..'
import { event } from '../event/resolvers'
import { roles } from '../rol/resolvers'

import type { Props } from '../../types'
import type EventProps from '../../types/events'

const magicNumber: number = 3
const rol = roles().find((rol: any) => rol.id === casual.random_element(roles().map((rol: any) => rol.id)))
export const relation = ({ id }: Props<string, string>) => ({
  id,
  rol,
  events: Array.from({ length: magicNumber }, () => casual.uuid),
  places: Array.from({ length: magicNumber }, () => casual.uuid),
  updated_date: casual.date()
})

export default {
  Query: {
    getRelationByUser: async (_: any, { id }: { id: string }) => {
      // const data = Array.from({ length: 3 }, () => relation({ id }))
      const data = relation({ id })
      return { data, notification: notification.success }
    }
  },
  Relation: {
    events: async ({ events: e }: { events: EventProps['id'][] }) => {
      return e.map((id: EventProps['id']) => event({ id }))
    },
    places: () => []
    /*
    places: async ({ places: p }: { places: PlaceProps['id'][] }) => {
      const places = p.map((id: EventProps['id']) => place({ id }))
      console.log({ rol, places });
      return { data: { rol, places }, notification: notification.success }
    }
    */
  }
}
