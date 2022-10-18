import axios from "axios";

const hostUrl = `http://192.168.0.107:5000/api`;

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
