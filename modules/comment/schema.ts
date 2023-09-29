export default `
type Comment implements ABM {
  id: String!
  created_by: String
  categoryId: Int
  text: String
  isActive: Boolean
  created_date: Date!
  updated_date: Date
}
type CommentResponse implements Response {
  notification: Notification
  data: [Comment]
}
extend type Query {
  getCommentById(id: ID!): CommentResponse
  getCommentsByUser(userId: ID): CommentResponse
}
`