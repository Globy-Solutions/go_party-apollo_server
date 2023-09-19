export default `
enum AllowedRoles {
  User
  Leader
  Organizator
}
type Rol implements ABM {
  id: ID!
  name: AllowedRoles
  isActive: Boolean
  description: String
  created_date: Date
  updated_date: Date
  deleted_date: Date
}
extend type Query {
  getAllRoles(isActive: Boolean): [Rol!]
  getRolById(id: ID!): [Rol!]
}
`
