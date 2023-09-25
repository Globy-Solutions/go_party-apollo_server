export default `
enum AllowedCategories {
  events
  places
}
type Category implements ABM {
  id: ID!
  name: AllowedCategories
  picture: String
  description: String
  isActive: Boolean
  created_date: Date!
  updated_date: Date
}
type CategoriesResponse implements Response {
  notification: Notification
  data: [Category]
}
type CategoryResponse implements Response {
  notification: Notification
  data: Category
}
extend type Query {
  getAllCategories(isActive: Boolean, by: ID): CategoriesResponse!
  getCategoryById(id: String!): CategoryResponse!
}
input CategoryInput {
  name: AllowedCategories
  isActive: Boolean
}
`
