import { ServerGroup } from '.'

export interface GetGroupsResponse {
  result: 1 | 0,
  data?: ServerGroup[]
}