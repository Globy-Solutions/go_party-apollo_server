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
type ResponseComment {
  data: [Comment]
}
extend type Query {
  getCommentsByUser(userId: ID): ResponseComment
  getCommentById(id: ID!): ResponseComment
}
`
