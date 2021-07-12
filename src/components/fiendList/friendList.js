import propTypes from 'prop-types';
import s from './friends.module.css';

export default function FriendList(props) {
  const { friends } = props;
  return (
    <ul class={s.friendList}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <span className={s[friend.isOnline]}>{friend.isOnline}</span>
          <img className={s.avatar} src={friend.avatar} alt="" width="48" />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  isOnline: propTypes.bool.isRequired,
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};
