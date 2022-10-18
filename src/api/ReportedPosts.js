import axios from "axios";

const hostUrl = `http://192.168.0.107:5000`;

export const getAllReportedPosts = async () => {
  try {
    let { data } = await axios.get(`${hostUrl}/api/posts/all-reported`);
    return data;
  } catch (error) {
    return { success: false };
  }
};

export const dismissReport = async (reportedPostId) => {
  try {
    let { data } = await axios.delete(
      `${hostUrl}/api/posts/dismiss-report/${reportedPostId}`
    );
    return data;
  } catch (e) {
    return { success: false, error: e };
  }
};

export const deletePost = async (reportedPost) => {
  const { data } = await axios.delete(`${hostUrl}/api/posts/delete-reported`, {
    data: { postId: reportedPost.post._id, reportId: reportedPost._id },
  });
  console.log("Res", data);
};
