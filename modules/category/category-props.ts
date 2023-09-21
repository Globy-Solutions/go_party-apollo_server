// Purpose: Type definitions for category properties.

import type { ABM } from "../../types"

type CategoryProps = ABM & {
  id: number
  name: string
  picture?: string
  created_by: number
  description: string
  isAvailable?: boolean
}

export default CategoryProps