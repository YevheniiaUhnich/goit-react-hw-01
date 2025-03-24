import React from "react";
import s from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.friendListItem}>
      <img src={avatar} alt="Avatar" width="160" />
      <p className={s.titleName}>{name}</p>
      {isOnline ? (
        <p className={clsx(s.status, s.green)}>onLine</p>
      ) : (
        <p className={clsx(s.status, s.red)}>offline</p>
      )}
      {isOnline && <p></p>}
    </li>
  );
};

export default FriendListItem;
