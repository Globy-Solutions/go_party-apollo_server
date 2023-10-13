import type { ABM } from ".";
import type UserProps from "./user";

type PlaceDistributionProps = ABM & {
  name: string
  total: number
  image: string
  availables: number
}
type PlanProps = ABM & {
  id: string
  description: string
  placeDistribution: PlaceDistributionProps[]
  created_by: UserProps['id']
}

export default PlanProps