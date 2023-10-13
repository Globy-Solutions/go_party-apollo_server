export default `
type Team implements ABM {
  id: ID!
  name: String!
  members: [User]
  events: [Event]
  created_by: User!
  isActive: Boolean
  created_date: Date!
  updated_date: Date
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
input TeamInput {
  name: String!
  members: [ID]
  created_by: ID
  isActive: Boolean
  created_date: Date
  updated_date: Date
}
type TeamResponse implements Response {
  data: Team
  notification: Notification
}
extend type Mutation {
  createTeam(input: TeamInput): TeamResponse
}
`
