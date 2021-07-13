import PropTypes from 'prop-types';
import StatisticsProfile from './statisticsProfile';
import s from './profile.module.css';
import defoltImage from '../image/hour.png';
export default function Profile(props) {
  const { avatar, name, tag, location, stats } = props;
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
        <p className={s.tag}>@ {tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <StatisticsProfile {...stats} />
    </div>
  );
}
Profile.defaultProps = {
  avatar: defoltImage,
};
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
