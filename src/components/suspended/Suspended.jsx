import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSuspendedUsers, suspendUser } from "../../api/User";
import { getUserCount } from "../../api/User";
import "./suspended.css";

const Suspended = () => {
  let user = useSelector((state) => state.user.value);
  const [userCount, setUserCount] = useState(0);
  const [suspendedUsers, setSuspendedUser] = useState([]);

  useEffect(() => {
    getSuspendedUsers()
      .then((res) => {
        if (res.success) {
          console.log(res);
        } else {
          alert("Failed to retrive users!");
        }
      })
      .catch(() => {
        alert("Failed to retrive users!");
      });
  }, []);

  useEffect(() => {
    getUserCount()
      .then((res) => {
        if (res.success) {
          setUserCount(res.userCount);
        } else {
          alert("Failed to get number of users.");
        }
      })
      .catch(() => {
        alert("Failed to get number of users.");
      });
  }, []);

  return (
    <div className="home-container">
      <div className="home-sidebar">
        <p>{user?.firstName + " " + user?.lastName}</p>
        <img src={user?.profilePic} alt="profile pic" />
        <p>Total Users: {userCount}</p>
        <div>
          <Link to={"/panel"}>
            <button>Home</button>
          </Link>
        </div>
      </div>
      <div className="suspended-main-content">
        <h3>Suspended Users</h3>
        <div className="suspended-container">
          <div className="user-card">
            <h5>{user.firstName + " " + user.lastName}</h5>
            <img src={user?.profilePic} alt="profile pic" />
            <button>Unsuspend</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suspended;
