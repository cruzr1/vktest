import { InitialsAvatarTextGradients } from '.'
import { User } from './user.interface'

export interface Group {
  id: number,
  groupName: string,
  closed: boolean,
  avatarColor: InitialsAvatarTextGradients,
  membersCount: number,
  friends: User[]
}