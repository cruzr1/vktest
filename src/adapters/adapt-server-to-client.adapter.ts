import { DEFAULT_AVATAR_COLOR } from '../const';
import { ServerGroup, Group, InitialsAvatarTextGradients } from '../types';


export const adaptServerToClient = (data: ServerGroup[]): Group[] => data.map((group) => ({
  id: group.id,
  groupName: group.name,
  closed: group.closed,
  avatarColor: group.avatar_color as InitialsAvatarTextGradients || DEFAULT_AVATAR_COLOR,
  membersCount: group.members_count,
  friends: group.friends?.map((friend) => ({
    firstName: friend.first_name,
    lastName: friend.last_name
  })) || []
}));
