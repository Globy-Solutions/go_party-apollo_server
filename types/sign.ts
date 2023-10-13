import type { Notification } from "."
import type UserProps from "./user"

export type SessionProps = {
  accessToken: string
  expiresIn: number
  idToken: string
  refreshToken: string
  tokenType: string
}
export type CallbackProps<DataType> = {
  data: DataType
  session?: SessionProps
  notification: Notification
}

export type SignInProps = {
  email: string
  password: string
}

export type PersonProps = UserProps & {
  phone: string
  city: string
  zip: string
  state: string
  country: string
  created_at: string
  updated_at: string
  deleted_at: string
  instagram: string
  facebook: string
  titok: string
  friends: number[]
  friend_requests_sent: number[]
  friend_requests_received: number[]
  follows: number[]
  assists: number[]
  votes: number[]
}
