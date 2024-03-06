import { Group } from './group.interface'

export interface GetGroupsResponse {
  result: 1 | 0,
  data?: Group[]
}