import type EventProps from "./events";
import type PlaceProps from "./place";
import type RolProps from "./rol";

export type EventsAssigned = {
  rol: RolProps['id']
  event: EventProps['id']
}
export type PlacesAssigned = {
  rol: RolProps['id']
  place: PlaceProps['id']
}
export type NewRelationProps = {
  user: string
  rol: string
  [x: string]: string
}
type RelationProps = {
  events: [EventsAssigned]
  places: [PlacesAssigned]
  updated_date: string
}

export default RelationProps