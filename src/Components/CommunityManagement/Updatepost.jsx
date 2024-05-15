import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

export default function UpdatePost() {
  const { postId } = useParams();

  const [values, setValues] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        console.log(postId);
        const response = await axios.get(
          `http://localhost:3030/community-page/posts/${postId}`
        );

        const postData = response.data.post;
        setValues({
          title: postData.title,
          body: postData.body,
        });
      } catch (error) {
        console.error("Error fetching post data:", error);
        toast.error("Failed to fetch post data");
      }
    };

    fetchPostData();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:3030/community-page/posts/${postId}`,
        values
      );
      toast.success("Post Updated");
    } catch (error) {
      console.error("Error updating post:", error);
      toast.error("Error updating post");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-secondary shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Update the Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={values.title}
            onChange={handleChange}
            placeholder="Enter post title"
            maxLength={30}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-primary"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="body" className="block font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="body"
            name="body"
            value={values.body}
            onChange={handleChange}
            rows="4"
            placeholder="Enter post description"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-primary"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="file" className="block font-medium text-gray-700">
            Photos
          </label>
          <input
            type="file"
            id="file"
            name="file"
            accept="image/*"
            onChange={handleChange}
            multiple
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-primary"
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-dark"
        >
          Update
        </button>
      </form>
    </div>
  );
}
