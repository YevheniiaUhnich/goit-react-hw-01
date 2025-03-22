import s from "./Profile.module.css";
import clsx from "clsx";
import { FcLike } from "react-icons/fc";
import { SlUserFollow } from "react-icons/sl";
import { GrOverview } from "react-icons/gr";

const Profile = ({ userName, tag, location, avatar, stats }) => {
  return (
    <div className={s.profile}>
      <img className={s.avatar} src={avatar} alt="User avatar" />
      <p className={s.nameProfile}>{userName}</p>
      <p className={s.nickName}>@{tag}</p>
      <p className={s.locationProfile}>{location}</p>
      <ul className={s.ulProfile}>
        <li className={s.liProfile}>
          <SlUserFollow className={s.iconFol} />
          <span className={s.spanFollowers}>Followers</span> {stats.followers}
        </li>
        <li className={s.liProfile}>
          <GrOverview className={s.views} />
          <span className={s.spanFollowers}>Views</span> {stats.views}
        </li>

        <li className={clsx(s.liProfile, s.red)}>
          <FcLike className={s.icon} />
          <span className={s.spanFollowers}>Likes</span> {stats.likes}
        </li>
      </ul>
    </div>
  );
};

export default Profile;
