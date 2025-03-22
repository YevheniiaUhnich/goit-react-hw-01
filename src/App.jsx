import { useState } from "react";
import "./App.css";
import userData from "./userData.json";
import friends from "./friends.json";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";

const App = () => {
  return (
    <>
      <h2 className="titleTask">Task-1</h2>
      <Profile
        userName={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

      <h2 className="titleTask">Task-2</h2>

      <FriendList friends={friends} />
    </>
  );
};
export default App;
