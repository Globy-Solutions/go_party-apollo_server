export default `
type User implements ABM {
  id: ID!
  name: String!
  avatar: String
  phone: String
  email: String!
  password: String
  rol: Rol
  isActive: Boolean
  created_date: Date!
  updated_date: Date
}
type UsersResponse implements Response {
  notification: Notification
  data: [User]
}
type UserResponse implements Response {
  notification: Notification
  data: User
}
extend type Query {
  getAllUsers: UsersResponse
  getUserById(id: ID!): UserResponse
}
input UserInput {
  name: String!
  avatar: String
  phone: String
  email: String!
  password: String
  created_date: Date
}
extend type Mutation {
  createUser(input: UserInput): UserResponse
}
type Subscription {
  newUser: User
}
`
