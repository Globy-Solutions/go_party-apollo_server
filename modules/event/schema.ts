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
  created_date: Date
  updated_date: Date
  deleted_date: Date
}
extend type Query {
  getAllEvents(isActive: Boolean): [Event!]
  getEventById(id: ID!): [Event!]
}
type Subscription {
  newEvent: Event
}
`
