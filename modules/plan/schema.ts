export default `
type PlaceDistribution implements ABM {
  name: String
  total: Int
  image: String
  availables: Int
  isActive: Boolean
  created_date: Date!
  updated_date: Date
}
type Plan implements ABM {
  id: ID!
  description: String
  isActive: Boolean
  created_by: Int!
  placeDistribution: [PlaceDistribution]
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
  isActive: Boolean
  created_by: Int
  created_date: Date!
}
extend type Mutation {
  createPlan(input: PlanInput): PlanResponse
}
`
