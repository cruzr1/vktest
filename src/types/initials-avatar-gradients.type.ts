import { COLORS_NUMBER_TO_TEXT_MAP, DEFAULT_AVATAR_COLOR } from '../const';


export type InitialsAvatarNumberGradients = keyof typeof COLORS_NUMBER_TO_TEXT_MAP;

export type InitialsAvatarTextGradients =
  | (typeof COLORS_NUMBER_TO_TEXT_MAP)[InitialsAvatarNumberGradients]
  | typeof DEFAULT_AVATAR_COLOR;

