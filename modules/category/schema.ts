export default `
enum AllowedCategories {
  Events
  Places
  Other
  Another
}
type Category implements ABM {
  id: ID!
  name: AllowedCategories
  isActive: Boolean
  picture: String
  description: String
  created_date: Date
  updated_date: Date
  deleted_date: Date
}
extend type Query {
  getAllCategories(isActive: Boolean): [Category!]
  getCategoryById(id: ID!): [Category!]
}
`
