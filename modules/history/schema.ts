export default `
type History implements ABM {
  id: ID!
  events: [Event!]
  comments: [Comment]
  followeds: [User]
  followers: [User]
  created_date: Date
  updated_date: Date
  deleted_date: Date
}
type HistoryResponse implements Response {
  notification: Notification
  data: History
}
extend type Query {
  history(id: ID!): HistoryResponse
}
`
