import s from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={s.friendItem}>
          <span
            className={`${s.status} ${isOnline ? s.online : s.offline}`}></span>
          <img src={avatar} alt="name" width="88" />
          <p className={s.titleName}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
