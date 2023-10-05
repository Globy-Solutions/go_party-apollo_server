import casual from 'casual'
import { notification } from '..'
import { event } from '../event/resolvers'
import { place } from '../place/resolvers'
import { roles } from '../rol/resolvers'

import type { EventsAssigned, PlacesAssigned } from '../../types/relation'
import type RolProps from '../../types/rol'

const magicNumber: number = 3

export const relation = () => ({
  events: Array.from({ length: magicNumber }, () => ({
    rol: casual.random_element(
      roles().map((rol: RolProps) => rol.id)
    ), event: casual.uuid
  })),
  places: Array.from({ length: magicNumber }, () => ({
    rol: casual.random_element(
      roles().map((rol: RolProps) => rol.id)
    ), place: casual.uuid
  })),
  updated_date: casual.date()
})
export default {
  Query: {
    getRelationByUser: async (_: any, { id }: { id: string }) => {
      if (!id) {
        return { data: null, notification: notification.error }
      }
      return { data: relation(), notification: notification.success }
    }
  },
  Relation: {
    events: async ({ events: e }: { events: EventsAssigned[] }) => await Promise.all(
      e.map(({ rol, event: id }) => ({
        rol: roles().find((r: RolProps) => r.id === rol),
        event: event({ id })
      })
      )),
    places: async ({ places: p }: { places: PlacesAssigned[] }) => await Promise.all(
      p.map(({ rol, place: id }) => ({
        rol: roles().find((r: RolProps) => r.id === rol),
        place: place({ id })
      })
      ))
  }
}
