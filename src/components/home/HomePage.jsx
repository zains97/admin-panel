import React from "react";
import "./home.css";
import { PostComponent } from "../index";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserCount } from "../../api/User";
import { useState } from "react";
import { getAllReportedPosts } from "../../api/ReportedPosts";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [userCount, setUserCount] = useState();
  const [reportedPosts, setReportedPosts] = useState([]);
  let user = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  //Side effect for getting user count
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

  //Side effect for getting reported posts
  useEffect(() => {
    getAllReportedPosts()
      .then((res) => {
        if (res.success) {
          setReportedPosts(res.data);
        } else {
          alert("Could not fetch posts, try refreshing");
        }
      })
      .catch(() => {
        alert("Could not fetch posts, try refreshing");
      });
  }, []);

  return (
    <div className="home-container">
      <div className="home-sidebar">
        <p>{user?.firstName + " " + user?.lastName}</p>
        <img src={user?.profilePic} alt="profile pic" />
        <p>Total Users: {userCount}</p>
        <div></div>
      </div>
      <div className="home-main-content">
        <div className="heading-container">
          <h3>Reported Posts ({reportedPosts.length})</h3>
          <button
            type="button"
            onClick={() => {
              window.localStorage.setItem("user", JSON.stringify(null));
              navigate("/");
            }}
          >
            Log Out
          </button>
        </div>
        <div className="post-container">
          {reportedPosts.map((post, index) => (
            <PostComponent post={post} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
