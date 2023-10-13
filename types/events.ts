import type { ABM } from '.'
import type CommentProps from './comments'
import type PlaceProps from './place'
import type UserProps from './user'

type EventProps = ABM & {
  id: string
  title: string
  name: string
  isActive: boolean
  placeId: PlaceProps<undefined>['id']
  image: number
  pictures: string[]
  videos?: string[]
  price: number
  address: string
  about: string
  latitude: number
  longitude: number
  tags: string[]
  created_by: UserProps['id']
  followers: UserProps['id'][]
  likes: UserProps['id'][]
  goinTo?: UserProps['id'][]
  comments?: CommentProps['id'][] | CommentProps[]
}

export default EventProps