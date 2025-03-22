import { useState } from "react";
import "./App.css";
import userData from "./userData.json";
import Profile from "./components/Profile/Profile";

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

      <h2 className="titleTask">Task-1</h2>
    </>
  );
};
export default App;
