import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import Post from "./Post";

export default function Community() {
  const [showPost, setShowPost] = useState(false);
  const handleOnClose = () => setShowPost(false);
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

  

  return (
    <div>
      {/* search bar and create button */}
      <div className="flex justify-between items-center">
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

      <div className="mt-4 ml-4 grid grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <div key={index} className="max-w-sm bg-accent text-background border border-gray-200 rounded-lg">
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {post.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {post.body}
              </p>
              <button
                onClick={() => setShowPost(true)}
                className="px-4 py-1 mt-4 bg-primary text-white rounded-md font-bold hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-dark"
              >
                Post
              </button>
            </div>
          </div>
        ))}
        
      </div>

      <Post onClose={handleOnClose} visible={showPost} />
    </div>
  );
}



