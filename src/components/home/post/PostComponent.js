import React, { useEffect, useState } from "react";
import { deletePost, dismissReport } from "../../../api/ReportedPosts";
import { suspendUser } from "../../../api/User";
import { getUser } from "../../../api/User";
import "./post.css";

const PostComponent = ({ post }) => {
  const [reporter, setReporter] = useState();
  useEffect(() => {
    getUser(post.reporterId).then((res) => {
      if (res.status == 200) {
        setReporter(res.data);
      } else {
        alert("could not fetch reporter data, try refreshing");
      }
    });
  }, []);
  return (
    <div className="post-wrapper">
      <div className="creator-info">
        <img src={post.post.creatorImage} />
        <p className="reported-by">{post.post.creatorName}</p>
      </div>
      {post.post.postImage.length > 15 ? (
        <img src={`data:image/png;base64,${post.post.postImage}`} />
      ) : (
        <></>
      )}
      <p>{post.post?.postBody}</p>
      <p className="reported-by">
        Reported By: {reporter?.firstName + " " + reporter?.lastName}
      </p>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            deletePost(post)
              .then(() => {
                alert("post deleted");
              })
              .catch(() => {
                alert("Failed to deleted post");
              });
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            suspendUser(post.post.creator)
              .then((res) => {
                if (res.success == true) {
                  alert("Suspended user");
                } else {
                  alert("Failed to suspend user");
                }
              })
              .catch(() => {
                alert("Failed to suspend user!");
              });
          }}
          type="button"
        >
          Suspend User
        </button>
        <button
          onClick={() => {
            dismissReport(post._id)
              .then((res) => {
                console.log(res);
                if (res.success) {
                  alert(res.message);
                } else {
                  alert(res.error);
                }
              })
              .catch(() => {
                alert("Operation failed, please try again.");
              });
          }}
          type="button"
        >
          Dismiss Report
        </button>
      </div>
    </div>
  );
};

export default PostComponent;
