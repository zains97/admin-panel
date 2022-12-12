import React from "react";
import { useState } from "react";
import "./login.css";
import connectLogo from "../../assets/ConnectLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slices/UserSlice";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/User";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const disptch = useDispatch();
  const user = useSelector((state) => state.user.value);
  let temp = JSON.parse(window.localStorage.getItem("user"));

  let navigate = useNavigate();
  return (
    <div className="login-container">
      <form>
        <div className="logo-wrapper">
          <img src={connectLogo} alt="logo" /> Connect
        </div>
        <div className="input-wrapper">
          <input
            id="stuff"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <i className="fa fa-at input-icon"></i>
        </div>
        <div className="input-wrapper">
          <input
            id="stuff"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <i className="fa fa-lock input-icon"></i>
        </div>
        <button
          type="button"
          onClick={() => {
            login(email, password)
              .then((res) => {
                if (res.message == "Login successful") {
                  if (res.user.isAdmin) {
                    disptch(setUser(res.user));
                    window.localStorage.setItem(
                      "user",
                      JSON.stringify(res.user)
                    );
                    navigate("/panel");
                  } else {
                    alert("You are not authorized.");
                  }
                } else {
                  alert("Something went wrong");
                }
              })
              .catch(() => alert("Something went wrong"));
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
