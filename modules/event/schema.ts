export default `
interface EventInt implements ABM{
  title: String!
  name: String!
  categoryId: Int!
  image: Int
  pictures: [String]
  videos: [String]
  price: Float
  address: String
  about: String
  latitude: Float
  longitude: Float
  tags: [String]
  created_by: ID!
  isActive: Boolean
  created_date: Date!
  updated_date: Date
}
type Event implements EventInt & ABM {
  id: ID!
  title: String!
  name: String!
  categoryId: Int!
  image: Int
  pictures: [String]
  videos: [String]
  price: Float
  address: String
  about: String
  latitude: Float
  longitude: Float
  tags: [String]
  created_by: ID!
  followers: [User]
  likes: [User]
  goinTo: [User]
  comments: [Comment]
  isActive: Boolean
  created_date: Date!
  updated_date: Date
}
type EventsResponse implements Response {
  data: [Event]
  notification: Notification
}
type EventResponse implements Response {
  data: Event
  notification: Notification
}
extend type Query {
  getAllEvents(isActive: Boolean, by: ID): EventsResponse
  getEventById(id: ID!): EventResponse
}
input EventInput {
  title: String!
  name: String!
  categoryId: Int!
  pictures: [String]
  videos: [String]
  price: Float
  address: String
  about: String
  latitude: Float
  longitude: Float
  tags: [String]
  created_by: Int!
  isActive: Boolean
  created_date: Date!
  updated_date: Date
}
extend type Mutation {
  createEvent(input: EventInput): EventResponse
}
type Subscription {
  newEvent: Event
}
`
