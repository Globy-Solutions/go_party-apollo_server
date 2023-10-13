import type { ABM } from ".";
import type CommentProps from "./comments";
import type PlanProps from "./plan";
import type UserProps from "./user";

type PlaceProps<PictureProps> = ABM & {
  id: string
  name: string
  description: string
  webSite?: string
  image?: number
  pictures: string[] | PictureProps[]
  address: string
  latitude: number
  longitude: number
  events?: string[]
  followers?: UserProps['id'][]
  followeds?: UserProps['id'][]
  likes?: UserProps['id'][]
  goinTo?: UserProps['id'][]
  plans: PlanProps[]
  tags?: string[]
  comments?: CommentProps['id'][] | CommentProps[]
  created_by?: UserProps['id']
}

export default PlaceProps