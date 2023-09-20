export default `
type Team implements ABM {
  id: ID!
  name: String!
  members: [User]
  isActive: Boolean
  created_by: ID!
  events: [Event]
  created_date: Date
  updated_date: Date
  deleted_date: Date
}
type TeamsResponse implements Response {
  notification: Notification
  data: [Team]
}
type TeamResponse implements Response {
  notification: Notification
  data: Team
}
extend type Query {
  getAllTeams(isActive: Boolean, by: ID): TeamsResponse
  getTeamById(id: ID!): TeamResponse
}
`
