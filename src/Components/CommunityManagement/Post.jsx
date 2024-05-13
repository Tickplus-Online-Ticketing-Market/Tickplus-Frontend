import React, { useState, useEffect } from "react";
import tick from "../../Assets/CommunityManagement/tickplus.png";

export default function Post({ visible, onClose, post }) {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [reactCount, setReactCount] = useState(0);

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const newCommentObj = {
        id: comments.length + 1,
        user: "New User",
        content: newComment.trim(),
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
    }
  };

  const handleReact = () => {
    setReactCount((prevCount) => prevCount + 1);
  };

  const handleOnClose = (e) => {
    if (!e.target.closest(".rounded-lg")) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!visible || !post) return null;

  return (
    <div
      onClick={handleOnClose}
      className="fixed inset-0 flex justify-center items-center"
    >
      {/* post content */}
      <div className="absolute inset-0 flex justify-center items-center bg-background bg-opacity-20 backdrop-blur-sm">
        <div className="p-8 bg-accent rounded-lg shadow-lg flex w-3/4 h-3/4 relative">
          {/* Heart react */}
          <div className="flex items-center">
            <button
              onClick={handleReact}
              className="absolute top-0 left-0 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-700"
            >
              ❤️
              <span className="text-primary font-bold">{reactCount}</span>
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center">
            <img src={tick} alt="logo" />
            {/* Render post content */}
            <h2 className="text-2xl text-primary font-bold mb-2">{post.title}</h2>
            <div className="text-background mb-6">{post.body}</div>
          </div>

          {/* Comments */}
          <div className="flex-1 pl-8">
            <h3 className="text-xl text-primary font-bold mb-2">Comments</h3>
            {comments.map((comment) => (
              <div key={comment.id} className="mb-2 text-background">
                <strong>{comment.user}</strong>: {comment.content}
              </div>
            ))}
            {/* Add comment */}
            <div className="mb-4">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-primary"
              />
              <button
                onClick={handleAddComment}
                className="mt-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-dark"
              >
                Add Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
