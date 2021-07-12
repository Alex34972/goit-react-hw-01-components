import propTypes from 'prop-types';
export default function FriendList(props) {
  const { friends } = props;
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <li className="item" key={friend.id}>
          <span className="status">{friend.isOnline}</span>
          <img className="avatar" src={friend.avatar} alt="" width="48" />
          <p className="name">{friend.name}</p>
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
