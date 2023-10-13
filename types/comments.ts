import type { ABM } from "."
import type UserProps from "./user"

type CommentProps = ABM & {
  id: string
  created_by: UserProps
  categoryId: number
  text: string
}

export default CommentProps
