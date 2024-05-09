import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

export default function UpdatePostPage() {
  const { postId } = useParams();
  const history = useHistory();
  const [postData, setPostData] = useState({
    title: "",
    body: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPostData();
  }, [postId]);

  const fetchPostData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/notes/${postId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch post data");
      }
      const data = await response.json();
      setPostData(data.note);
    } catch (error) {
      console.error("Error fetching post data:", error);
      setError("Failed to fetch post data");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/notes/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      if (!response.ok) {
        throw new Error("Failed to update post");
      }

      history.push(`/post/${postId}`);
    } catch (error) {
      console.error("Error updating post:", error);
      setError("Failed to update post");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Update Post</h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={postData.title}
            onChange={handleInputChange}
            placeholder="Enter title"
          />
        </div>
        <div>
          <label htmlFor="body">Description:</label>
          <textarea
            id="body"
            name="body"
            value={postData.body}
            onChange={handleInputChange}
            placeholder="Enter description"
            rows="4"
          ></textarea>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
