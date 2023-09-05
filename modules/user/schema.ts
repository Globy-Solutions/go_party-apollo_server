export default `
type User {
  id: ID!
  name: String!
  avatar: String
}
extend type Query {
  getAllUsers: [User]
  getUserById(id: ID!): User
}
`
