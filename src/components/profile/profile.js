import propTypes from 'prop-types';
import s from './profile.module.css';
import defoltImage from '../image/hour.png';
export default function Profile(props) {
  const { avatar, name, tag, location, followers, views, likes } = props;
  return (
    <div className={s.container}>
      <div className={s.profile}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={s.avatar}
          width="90"
        />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.defaultProps = {
  avatar: defoltImage,
};
Profile.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  followers: propTypes.number.isRequired,
  views: propTypes.number.isRequired,
  likes: propTypes.number.isRequired,
};
