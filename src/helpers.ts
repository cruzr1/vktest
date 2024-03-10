import {TEXT_COLORS_LIST, DEFAULT_AVATAR_COLOR, COLOR_NAMES_MAP} from './const.ts';
import type { InitialsAvatarTextGradients, Group, AvatarColorOptionsType } from './types';


export const normaliseAvatarColor = (avatarColor: InitialsAvatarTextGradients): InitialsAvatarTextGradients => TEXT_COLORS_LIST.includes(avatarColor) ? avatarColor : DEFAULT_AVATAR_COLOR

export const createAvatarColorOptions = (groups: Group[]): AvatarColorOptionsType[] => Array.from(
    new Set(
      groups
        .map((group) => normaliseAvatarColor(group.avatarColor))
    )
  ).map<AvatarColorOptionsType>(
    (color) => ({
      value: color,
      label: COLOR_NAMES_MAP[color]
    })
  ).concat({
    value: 'custom',
    label: 'Любой'
  })
