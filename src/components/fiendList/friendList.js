import propTypes from 'prop-types';
import s from './friends.module.css';
export default function FriendList(props) {
  const { friends } = props;
  return (
    <ul class={s.friendList}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <span className={s.status}>{friend.isOnline}</span>
          <img className={s.avatar} src={friend.avatar} alt="" width="48" />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  isOnline: propTypes.string,
  avatar: propTypes.string,
  name: propTypes.string,
};
