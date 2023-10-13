import type { ABM } from ".";
import type UserProps from "./user";

type TeamProps = ABM & {
  id: string
  name: string
  members: UserProps[]
  created_by: UserProps
}

export default TeamProps