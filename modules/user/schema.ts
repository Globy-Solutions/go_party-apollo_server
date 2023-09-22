export default `
type User implements ABM {
  id: ID!
  name: String!
  avatar: String
  phone: String
  email: String!
  password: String!
  rol: Rol!
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
  getUserById(id: ID!): UserResponse
}
`
