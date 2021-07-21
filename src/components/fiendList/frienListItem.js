import React from 'react';
import s from './friends.module.css';
import defoltImage from '../image/hour.png';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      <span className={s[isOnline]}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
FriendListItem.defaultProps = {
  avatar: defoltImage,
};
