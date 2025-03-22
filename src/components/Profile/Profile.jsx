import s from "./Profile.module.css";

const Profile = ({ userName, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <img src={avatar} alt="User avatar" />
      <p>{userName}</p>
      <p>{tag}</p>
      <p>{location}</p>
      <ul>
        <li>
          <span>Followers</span> {stats.followers}
        </li>
        <li>
          <span>Views</span> {stats.views}
        </li>
        <li>
          <span>Likes</span> {stats.likes}
        </li>
      </ul>
    </div>
  );
};

export default Profile;
