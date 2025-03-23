import s from "./FriendList.module.css";
import clsx from "clsx";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={s.friendItem}>
          <img src={avatar} alt="name" width="120" />
          <p className={s.titleName}>{name}</p>
          {isOnline ? (
            <span className={clsx(s.status, s.green)}>Online</span>
          ) : (
            <span className={clsx(s.status, s.red)}>Offline</span>
          )}
          {isOnline && <span></span>}
          {}
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
