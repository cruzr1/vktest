import { Group, Header, SimpleCell } from '@vkontakte/vkui'
import type { User } from '../types'

type FriendsGroupPropsType = {
  friends: User[],
  isShown: boolean
}


export default function FriendsGroup({friends, isShown}: FriendsGroupPropsType):JSX.Element {
  if (isShown) {
    return (
      <Group header={<Header mode="secondary">Список друзей</Header>}>
        {friends.length === 0 ? 
          <SimpleCell>В этой группе нет друзей :(</SimpleCell> :
          friends.map((friend) => <SimpleCell key={`${friend.firstName} ${friend.lastName}`}>{`${friend.firstName} ${friend.lastName}`}</SimpleCell>
        )}
      </Group>
    )
  }
  return <></>
}