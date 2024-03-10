import { ServerUser } from './server-user.interface'

export interface ServerGroup {
  id: number,
  name: string,
  closed: boolean,
  avatar_color?: string,
  members_count: number,
  friends?: ServerUser[]
}