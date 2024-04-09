import { FriendListItem } from './FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friernd => (
        <FriendListItem
          key={friernd.id}
          id={friernd.id}
          avatar={friernd.avatar}
          name={friernd.name}
          isOnline={friernd.isOnline}
        />
      ))}
    </ul>
  );
};