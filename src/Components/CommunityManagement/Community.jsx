import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import Post from "./Post";

export default function Community() {
  const [showPost, setShowPost] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/community-page/posts"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      setPosts(data.posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  useEffect(() => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchQuery, posts]);

  const handleOnClose = () => setShowPost(false);

  const handleClick = (post) => {
    setShowPost(true);
    setSelectedPost(post);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="relative ml-auto">
          <HiOutlineSearch
            fontSize={20}
            className="text-text-normal absolute left-3 top-1.5"
          />
          <input
            type="text"
            placeholder="Search...."
            className="h-8 w-64 px-4 pl-11 border border-background rounded-3xl focus:outline-none focus:border-primary"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
      </div>

      <div className="mt-4 ml-4 grid grid-cols-3 gap-4">
        {filteredPosts.map((post, index) => (
          <div
            key={index}
            className="max-w-sm bg-accent text-background border border-gray-200 rounded-lg"
          >
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {post.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {post.body}
              </p>
              <button
                onClick={() => handleClick(post)}
                className="px-4 py-1 mt-4 bg-primary text-white rounded-md font-bold hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-dark"
              >
                Post
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Conditionally render Post component */}
      {selectedPost && (
        <Post visible={showPost} onClose={handleOnClose} post={selectedPost} />
      )}
    </div>
  );
}
