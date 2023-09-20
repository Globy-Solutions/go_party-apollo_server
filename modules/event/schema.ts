export default `
type Event implements ABM {
  id: ID!
  title: String!
  name: String!
  isActive: Boolean
  categoryId: Category!
  image: Int
  pictures: [String]
  videos: [String]
  price: Float
  address: String
  about: String
  latitude: Float
  longitude: Float
  tags: [String]
  followers: [User]
  likes: [User]
  goinTo: [User]
  comments: [Comment]
  created_by: ID!
  created_date: Date!
  updated_date: Date
  deleted_date: Date
}
type EventsResponse implements Response {
  notification: Notification
  data: [Event]
}
type EventResponse implements Response {
  notification: Notification
  data: Event
}
extend type Query {
  getAllEvents(isActive: Boolean, by: ID): EventsResponse
  getEventById(id: ID!): EventResponse
}
type Subscription {
  newEvent: Event
}
`
