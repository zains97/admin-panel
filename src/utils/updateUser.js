import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/UserSlice";

export const useUpdateUser = (user) => {
  const dispatch = useDispatch();
  window.localStorage.setItem("user", user);
  dispatch(setUser(user));
};
