export default `
type User implements ABM {
  id: ID!
  name: String!
  avatar: String
  phone: String
  email: String!
  password: String!
  created_date: Date
  updated_date: Date
  deleted_date: Date
}
extend type Query {
  getAllUsers: [User]
  getUserById(id: ID!): User
}
`
