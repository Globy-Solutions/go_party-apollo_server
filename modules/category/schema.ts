export default `
enum AllowedCategories {
  Events
  Places
  Other
  Another
}
type Category {
  id: ID!
  title: AllowedCategories
  isActive: Boolean
  picture: String
  description: String
}
type ResponseCategory {
  data: [Category]
}
extend type Query {
  getAllCategories(isActive: Boolean): ResponseCategory
  getCategoryById(id: ID!): ResponseCategory
}
`
