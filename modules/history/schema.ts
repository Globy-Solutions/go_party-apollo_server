export default `
type History implements ABM & SocialNetwork {
  events: [Event]
  places: [Place]
  comments: [Comment]
  followeds: [User]
  followers: [User]
  tags: [String]
  likes: [User]
  goinTo: [User]
  isActive: Boolean
  created_date: Date!
  updated_date: Date
}
type HistoryResponse implements Response {
  notification: Notification
  data: History
}
extend type Query {
  history(userId: ID!): HistoryResponse
}
`
