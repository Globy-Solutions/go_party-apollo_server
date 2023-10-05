export default `
type Plan implements ABM {
  id: ID!
  name: String!
  description: String
  pictures: [String]
  isActive: Boolean
  created_by: User
  created_date: Date!
  updated_date: Date
}
type PlanResponse implements Response {
  notification: Notification
  data: Plan
}
type PlansResponse implements Response {
  notification: Notification
  data: [Plan]
}
extend type Query {
  getPlanById(id: ID!, isActive: Boolean): PlanResponse
  getPlansByPlace(by: ID!, isActive: Boolean): PlansResponse
}
input PlanInput {
  name: String!
  description: String
  pictures: [String]
  isActive: Boolean
  created_by: Int
  created_date: Date!
}
extend type Mutation {
  createPlan(input: PlanInput): PlanResponse
}
`
