export default `
type Session {
  accessToken: String!
  expiresIn: Int!
  idToken: String!
  refreshToken: String!
  tokenType: String!
}
type Notification {
  type: String!
  message: String!
}
type SignIn {
  data: User
  session: Session
  notification: Notification
}
extend type Query {
  signIn(email: String!, password: String!): SignIn
}
`
