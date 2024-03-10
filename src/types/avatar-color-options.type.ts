import { InitialsAvatarTextGradients} from './index';
import { COLOR_NAMES_MAP } from '../const';


export type AvatarColorOptionsType = {
  value: InitialsAvatarTextGradients | 'custom';
  label: typeof COLOR_NAMES_MAP[keyof typeof COLOR_NAMES_MAP] | 'Любой'
}