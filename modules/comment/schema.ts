export default `
type Comment implements ABM {
  id: ID!
  userId: User
  categoryId: Category
  text: String
  isAvailable: Int
  created_date: Date
  updated_date: Date
  deleted_date: Date
}
extend type Query {
  getCommentsByUser(userId: ID): [Comment!]
  getCommentById(id: ID!): [Comment!]
}
`
