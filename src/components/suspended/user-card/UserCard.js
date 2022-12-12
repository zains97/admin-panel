import React from "react";
import { useSelector } from "react-redux";
import "./usercard.css";

const UserCard = () => {
  let user = useSelector((state) => state.user.value);

  return (
    <div className="user-card">
      <h5>Zain Saleem</h5>
      <img src={user?.profilePic} alt="profile pic" />
      <button>Unsuspend</button>
    </div>
  );
};

export default UserCard;
