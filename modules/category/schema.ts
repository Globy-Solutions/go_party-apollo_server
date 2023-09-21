export default `
enum AllowedCategories {
  events
  places
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
type CategoriesResponse implements Response {
  notification: Notification
  data: [Category]
}
type CategoryResponse implements Response {
  notification: Notification
  data: Category
}
extend type Query {
  getAllCategories(isActive: Boolean): CategoriesResponse!
  getCategoryById(id: ID!): CategoryResponse!
}
`
