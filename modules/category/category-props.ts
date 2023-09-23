// Purpose: Type definitions for category properties.

import type { ABM } from "../../types"

enum AllowedCategories {
  events,
  places
}
type CategoryProps = ABM & {
  id: number
  name: AllowedCategories
  picture?: string
  description: string
  isActive?: boolean
}

export default CategoryProps