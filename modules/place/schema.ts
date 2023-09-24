export default `
type Place implements ABM {
  id: ID!
  name: String!
  description: String
  isActive: Boolean
  image: String
  address: String
  latitude: Float
  longitude: Float
  created_by: ID!
  created_date: Date!
  updated_date: Date
}
type PlacesResponse implements Response {
  notification: Notification
  data: [Place]
}
type PlaceResponse implements Response {
  notification: Notification
  data: Place
}
extend type Query {
  getAllPlaces(isActive: Boolean, by: ID): PlacesResponse
  getPlaceById(id: ID!): PlaceResponse
}
input PlaceInput {
  name: String!
  description: String
  isActive: Boolean
  image: String
  address: String
  latitude: Float
  longitude: Float
  created_by: ID!
  created_date: Date
  updated_date: Date
}
extend type Mutation {
  createPlace(input: PlaceInput): PlaceResponse
}
type Subscription {
  newPlace: Place
}
`
