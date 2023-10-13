import type { ABM } from "."

export enum AllowedRoles {
  User,
  RRPP,
  Leader,
  Organizator,
  Owner
}

type RolProps = ABM & {
  id: number
  name: AllowedRoles
  isActive?: boolean
  description?: string
}

export default RolProps
