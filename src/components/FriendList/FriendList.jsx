import React from "react";
import s from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendsListUl}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={s.friendListId}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
