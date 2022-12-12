import axios from "axios";

// const hostUrl = `http://192.168.0.106:5000/api`;
const hostUrl = "https://connect-fyp-zain.herokuapp.com/api";
export const getUserCount = async () => {
  try {
    let { data } = await axios.get(`${hostUrl}/user/count`);
    return data;
  } catch (error) {
    return { success: false };
  }
};

export const getUser = async (userId) => {
  try {
    const url = `${hostUrl}/user/user/${userId}`;
    const { data } = await axios.get(url);
    return data;
  } catch (ex) {
    return { status: 500 };
  }
};

export const login = async (email, password) => {
  try {
    const url = `${hostUrl}/auth/login`;
    const { data } = await axios.post(url, { email, password });
    return data;
  } catch (error) {
    console.log(error);
    return { message: error.message };
  }
};

export const getSuspendedUsers = async () => {
  try {
    let { data } = await axios.get(`${hostUrl}/user/get-all-suspended`);
    return data;
  } catch (e) {
    return { success: false };
  }
};

export const suspendUser = async (userId) => {
  try {
    let { data } = await axios.patch(`${hostUrl}/user/suspend-user`, {
      userId,
    });
    return data;
  } catch (error) {
    return { success: false };
  }
};
