export default `
type EventsAssigned {
  rol: Rol
  events: [Event]
}
type PlacesAssigned {
  rol: Rol
  places: [Place]
}
type Relation {
  events: [EventsAssigned]
  places: [PlacesAssigned]
  updated_date: Date
}
type RelationResponse implements Response {
  notification: Notification
  data: Relation
}
extend type Query {
  getRelationByUser(id: ID!): RelationResponse
}
`
