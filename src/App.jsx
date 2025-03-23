import { useState } from "react";
import "./App.css";
import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import Profile from "./components/Profile/Profile";
import FriendListItem from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

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

      <FriendListItem friends={friends} />

      <h2 className="titleTask">Task-3</h2>

      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;
