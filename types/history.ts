import type { ABM } from '.'
import type CommentProps from './comments'
import type EventProps from './events'
import type PlaceProps from './place'
import type UserProps from './user'

type HistoryProps = ABM & {
  events?: EventProps[]
  places?: PlaceProps[]
  comments?: CommentProps[]
  followeds?: UserProps[]
  followers?: UserProps[]
}

export default HistoryProps