import type { ABM } from "."
import type RolProps from "./rol"

type UserProps = ABM & {
  id: string
  name: string
  avatar: string
  phone: string
  email: string
  password: string
  rol: RolProps['id']
}

export default UserProps