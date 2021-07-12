import propTypes from 'prop-types';
export default function FriendList(props) {
  const { friends } = props;
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <li class="item">
          <span class="status">{friend.isOnline}</span>
          <img class="avatar" src={friend.avatar} alt="" width="48" />
          <p class="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  isOnline: propTypes.string,
  avatar: propTypes.string,
  name: propTypes.string.isRequired,
};
