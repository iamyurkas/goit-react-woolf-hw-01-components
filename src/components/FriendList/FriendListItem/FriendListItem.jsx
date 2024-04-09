import css from './FriendListItem.module.css';

export const FriendListItem = ({ isOnline, name, avatar }) => {
  return (
    <li className={css.item}>
      <span
        className={css.online}
        style={{ backgroundColor: isOnline ? 'red' : 'green' }}
      ></span>
      <img
        className={css.avatar}
        src={avatar}
        alt={name}
        style={{ width: 48 }}
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};