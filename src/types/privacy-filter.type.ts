import { GROUP_PRIVACY_FILTER } from '../const';

export type PrivacyFilterType = typeof GROUP_PRIVACY_FILTER[keyof typeof GROUP_PRIVACY_FILTER]['value'];