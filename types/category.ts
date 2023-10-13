import type { ABM } from "."
import type UserProps from "./user"

export enum AllowedCategories {
  events,
  places
}
type CategoryProps = ABM & {
  id: number
  name: keyof typeof AllowedCategories
  picture?: string
  description?: string
  followers: UserProps['id'][]
  tags: string[]
  likes: UserProps['id'][]
  created_by: UserProps['id']
}

export default CategoryProps