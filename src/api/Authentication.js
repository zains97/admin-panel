const hostURL = "http://192.168.0.107:5000";

export const loginUser = async (email, password) => {
  try {
    const url = `${hostURL}/api/auth/login`;
    const { data } = await axios.post(url, { email, password });
    console.log("RES: ", data);
    if (data.message != "Login successful") {
      return Alert.alert(data.message);
    }
    return data;
  } catch (error) {
    Alert.alert("Failed to login", error);
  }
};
