import { UserType } from '../enum/user.enum'

export interface User {
  id: number
  login: string
  avatar_url: string
  url: string
  type: UserType
  [key: string]: any
}
