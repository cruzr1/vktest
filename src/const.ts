export const COLORS_NUMBER_TO_TEXT_MAP = {
  1: 'red',
  2: 'orange',
  3: 'yellow',
  4: 'green',
  5: 'l-blue',
  6: 'violet',
} as const;

export const COLOR_NAMES_MAP = {
[COLORS_NUMBER_TO_TEXT_MAP[1]]: 'Красный',
[COLORS_NUMBER_TO_TEXT_MAP[2]]: 'Оранжевый',
[COLORS_NUMBER_TO_TEXT_MAP[3]]: 'Желтый',
[COLORS_NUMBER_TO_TEXT_MAP[4]]: 'Зеленый',
[COLORS_NUMBER_TO_TEXT_MAP[5]]: 'Голубой',
[COLORS_NUMBER_TO_TEXT_MAP[6]]: 'Фиолетовый'
} as const;

export const AVATAR_SIZE = 100;

export const DEFAULT_AVATAR_COLOR = COLORS_NUMBER_TO_TEXT_MAP[5];

export const TEXT_COLORS_LIST: string[] = Object.values(COLORS_NUMBER_TO_TEXT_MAP);

export const GROUP_PRIVACY_FILTER = {
  Opened: {
    caption: 'Открытая',
    value: 'opened'
  },
  Closed: {
    caption: 'Закрытая',
    value: 'closed'
  },
  Any: {
    caption: 'Любая',
    value: 'any'
  }
} as const;

export const LINEAR_GRADIENT = 'linear-gradient(90deg, rgba(246,9,5,1) 0%, rgba(252,246,24,1) 25%, rgba(30,231,15,0.7987570028011204) 50%, rgba(15,23,231,0.7987570028011204) 75%, rgba(231,15,222,0.7987570028011204) 100%)'