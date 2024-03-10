import { useEffect, useState, Fragment} from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks';
import { getGroups } from './store/api-actions';
import { CustomSelectOption, Button, FormLayoutGroup, Avatar, View, Panel, PanelHeader, Header, Group, SimpleCell, AppRoot,  FormItem, CustomSelect, RadioGroup, Radio, Checkbox, Div } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import type { Group as ClientGroup } from './types';
import { AVATAR_SIZE, GROUP_PRIVACY_FILTER, LINEAR_GRADIENT, TEXT_COLORS_LIST } from './const';
import { normaliseAvatarColor, createAvatarColorOptions } from './helpers';
import FriendsGroup from './components/friends-group';



function App() {
  const dispatch = useAppDispatch();
  const groups: ClientGroup[] = useAppSelector((state) => state.groups);
  const [showFriends, setShowFriends] = useState<number>(-1);
  const [privacyFilter, setPrivacyFilter] = useState<string>('any');
  const [avatarFilter, setAvatarFilter] = useState<string>('custom');
  const [friendsFilter, setFriendsFilter] = useState<boolean>(false);
  const activePrivacyFilter = privacyFilter === 'any' ? ['opened', 'closed'] : [privacyFilter];
  const activeAvatarFilter = avatarFilter === 'custom' ? [...TEXT_COLORS_LIST]: [avatarFilter];
  const avatarColorFilter = createAvatarColorOptions(groups);
  const handleResetFilters = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    setPrivacyFilter('any');
    setAvatarFilter('custom');
    setFriendsFilter(false);
  };
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(getGroups());
    }
    return () => {
      isMounted = false;
    };
  },[dispatch])
  return (
    <AppRoot>
      <View activePanel={'groups'}>
        <Panel id='groups'>
          <PanelHeader>Список групп</PanelHeader>
          <Group header={<Header size='large' mode='primary'>Фильтры</Header>}>
            <FormLayoutGroup mode='horizontal'>
              <FormItem top='Тип приватности'>
                <RadioGroup>
                  {Object.values(GROUP_PRIVACY_FILTER).map((filter) => (
                    <Radio 
                      key={filter.value}
                      name='privacy' 
                      value={filter.value}
                      checked={filter.value === privacyFilter}
                      onChange={(evt) => setPrivacyFilter(evt.target.value)}
                    >{filter.caption}</Radio>))
                  }
                </RadioGroup>
              </FormItem>
              <FormItem top='Цвет аватара' htmlFor='select-color'>
                <CustomSelect 
                  id='select-color' 
                  placeholder='Выберите цвет аватара...' 
                  options={avatarColorFilter}
                  value={avatarFilter}
                  renderOption={(props) => (
                    <CustomSelectOption {...props} before={<Avatar size={20} style={props.option.value === 'custom' ? { background: LINEAR_GRADIENT } : {}} gradientColor={props.option.value} />} />
                  )}
                  onChange={(evt) => setAvatarFilter(evt.target.value)}
                ></CustomSelect>
              </FormItem>
              <FormItem>
                <Checkbox
                  onChange={() => setFriendsFilter(!friendsFilter)}
                  checked={friendsFilter}
                >Есть друзья в группе</Checkbox>
              </FormItem>
              <Div>
                <Button
                  type='reset'
                  onClick={(evt) => handleResetFilters(evt)}
                >Сбросить фильтры</Button>
              </Div>
            </FormLayoutGroup>
          </Group>
          {groups.filter((group) => 
              activeAvatarFilter.includes(group.avatarColor) &&
              activePrivacyFilter.includes(group.closed? 'closed' : 'opened') &&
              (friendsFilter ? group.friends.length > 0 : true))
            .map((group) => 
            <Fragment key={group.id}>
              <Group header={<Header size='large' mode='primary'>{group.groupName.toUpperCase()}</Header>}>
                <SimpleCell
                  before={<Avatar size={AVATAR_SIZE} gradientColor={normaliseAvatarColor(group.avatarColor)} />}
                >
                  <SimpleCell
                    indicator={group.closed ? 'Закрытая' : 'Открытая'}
                    >
                    Тип приватности
                  </SimpleCell>
                  <SimpleCell
                    indicator={group.membersCount}
                    >
                    Количество подписчиков
                  </SimpleCell>
                  {group.friends?.length > 0 &&
                  <SimpleCell
                    expandable="always"
                    indicator={group.friends?.length}
                    onClick={() => {showFriends !== group.id ? setShowFriends(group.id): setShowFriends(-1)}}
                    >
                    Количество друзей
                  </SimpleCell>}
                </SimpleCell>
              </Group>
              {group.friends?.length > 0 && <FriendsGroup friends={group.friends} isShown={showFriends === group.id}/>}
            </Fragment>
          )}
        </Panel>
      </View>
    </AppRoot>
)
}

export default App
