export default `
type EventsAssigned {
  rol: Rol!
  event: Event!
}
type PlacesAssigned {
  rol: Rol!
  place: Place!
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
input RelationInput {
  user: ID!
  rol: Int!
  events: String
  places: String
  updated_date: Date
}
extend type Query {
  getRelationByUser(id: ID!): RelationResponse
}
extend type Mutation {
  updateRelationForUser(input: RelationInput): Notification
}
`
