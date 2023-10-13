export default `
type Session {
  accessToken: String!
  expiresIn: Int!
  idToken: String!
  refreshToken: String!
  tokenType: String!
}
type SignIn {
  data: User
  session: Session
  notification: Notification
}
type SignOut {
  notification: Notification
}
extend type Query {
  signIn(email: String!, password: String!): SignIn
}
type Mutation {
  signOut(id: String!, idToken: String!): SignOut
}
`
