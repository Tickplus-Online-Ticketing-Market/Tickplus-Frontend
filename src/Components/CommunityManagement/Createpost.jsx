import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function CreatePost() {
  const [postData, setPostData] = useState({
    title: "",
    body: "",
    files: [],
  });
  const [error, setError] = useState("");

  // input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //file input change
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setPostData((prevData) => ({
      ...prevData,
      files,
    }));
  };

  // form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if (
      !postData.title.trim() ||
      !postData.body.trim() ||
      !postData.files.length
    ) {
      toast.error("Fill all title,description and photo");
      return;
    }

    //bad word validation

    // List of bad words
    const badWords = ["bad", "inappropriate", "offensive"];

    const titleContainsBadWord = badWords.some((word) =>
      postData.title.toLowerCase().includes(word)
    );
    const descriptionContainsBadWord = badWords.some((word) =>
      postData.body.toLowerCase().includes(word)
    );

    if (titleContainsBadWord || descriptionContainsBadWord) {
      toast.error("contains inappropriate words");
      return;

    } else {
      try {
        await axios.post("http://localhost:3030/community-page/posts",postData);

        // erase the form fields
        setPostData({
          title: "",
          body: "",
          //files: [],
        });

        toast.success("Post Uploaded...");
        setError(""); // Clear error message
      } catch (error) {
        toast.error("Error occured!");
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-secondary shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Create a New Post</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={postData.title}
            onChange={handleInputChange}
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
            value={postData.body}
            onChange={handleInputChange}
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
            onChange={handleFileChange}
            multiple
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-primary"
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-dark"
        >
          Post
        </button>
      </form>
    </div>
  );
}
