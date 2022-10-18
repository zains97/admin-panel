import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { setUser } from "../../redux/slices/UserSlice";

const ProtectedRoute = ({ children }) => {
  const localStorageUser = JSON.parse(window.localStorage.getItem("user"));
  const dispatch = useDispatch();
  dispatch(setUser(localStorageUser));

  if (localStorageUser) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default ProtectedRoute;
