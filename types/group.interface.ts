import { User } from './user.interface'

export interface Group {
  id: number,
  name: string,
  closed: boolean,
  avatarColor?: string,
  membersCount: number,
  friends?: User[]
}