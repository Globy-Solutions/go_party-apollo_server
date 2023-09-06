export default `
scalar Date

type Event {
  created: Date
  updated: Date
  deleted: Date
  id: ID!
  title: String!
  name: String!
  isActive: Boolean
  image: Int
  picture: [String]
  video: String
  price: Float
  address: String
  about: String
  latitude: Float
  longitude: Float
  tags: [String]
  followers: [User]
  likes: [User]
  goinTo: [User]
}
extend type Query {
  getAllEvents: [Event]
  getEventById(id: ID!): Event
}
`;
