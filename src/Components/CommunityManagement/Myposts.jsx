import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { toast } from "react-toastify";
import axios from "axios";

export default function Myposts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:5000/notes");
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      setPosts(data.notes);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const deletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:5000/note/${postId}`);

      toast.success("Post Deleted");

      fetchPosts();
    } catch (error) {
      toast.error("Post Not Deleted");
    }
  };

  const handleDelete = (postId) => {
    deletePost(postId);
  };

  function Card({ post }) {
    return (
      <div className="max-w-sm bg-accent text-background border border-gray-200 rounded-lg">
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight ">
            {post.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {post.body}
          </p>
          <div className="flex gap-4">
            {/* <Link to={`/Updatepost/${post._id}`}> */}
            <button className="px-4 py-1 mt-4 bg-primary w-full rounded-md font-bold hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-dark">
              Edit post
            </button>
            {/* </Link> */}
            <button
              onClick={() => handleDelete(post._id)}
              className="px-4 py-1 mt-4 bg-primary w-full rounded-md font-bold hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-dark"
            >
              Delete post
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <Link to="/community-page/my-posts/create-post">
          <button className="px-3 py-2 ml-4 bg-primary text-white rounded-3xl hover:bg-primary-dark">
            Create Post
          </button>
        </Link>
        <div className="relative ml-auto">
          <HiOutlineSearch
            fontSize={20}
            className="text-text-normal absolute left-3 top-1.5"
          />
          <input
            type="text"
            placeholder="Search...."
            className="h-8 w-64 px-4 pl-11 border border-background rounded-3xl focus:outline-none focus:border-primary"
          />
        </div>
      </div>
      <div
        className="mt-4 ml-4 grid grid-cols-3 gap-4 "
        style={{ height: "800" }}
      >
        {posts.map((post, index) => (
          <Card key={index} post={post} />
        ))}
      </div>
    </div>
  );
}
