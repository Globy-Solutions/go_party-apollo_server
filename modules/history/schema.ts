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
extend type Query {
  history(id: ID!): History!
}
`
