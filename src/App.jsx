import { useState } from "react";
import "./App.css";
import userData from "./userData.json";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <Profile
      userName={userData.username}
      tag={userData.tag}
      location={userData.location}
      avatar={userData.avatar}
      stats={userData.stats}
    />
  );
};
export default App;
