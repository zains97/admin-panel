import axios from "axios";
// const hostURL = "http://192.168.0.106:5000";
const hostUrl = "https://connect-fyp-zain.herokuapp.com/";

export const loginUser = async (email, password) => {
  try {
    const url = `${hostURL}/api/auth/login`;
    const { data } = await axios.post(url, { email, password });
    console.log("RES: ", data);
    if (data.message != "Login successful") {
      return alert(data.message);
    }
    return data;
  } catch (error) {
    alert("Failed to login", error);
  }
};
