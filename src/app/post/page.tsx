"use client";
import React, { useEffect, useState } from "react";
import { FaUserCircle, FaThumbsUp, FaCommentAlt } from "react-icons/fa";

interface PostType {
  _id: string;
  title: string;
  description: string;
  name: string;
  image?: string;
}

const Post: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://syntax-share-backend.vercel.app/api/v1/posts"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setPosts(data);
        } else if (data.posts) {
          setPosts(data.posts);
        } else {
          setPosts([]);
        }
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen text-center bg-white dark:bg-black   py-20 md:py-16 px-8 sm:px-10 lg:px-8">
      <div className="relative text-center mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
        <div className="absolute text-2xl font-bold md:text-5xl left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
          <span>Posts</span>
        </div>
        <div className="relative text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
          <span>Posts</span>
        </div>
      </div>

      {loading ? (
        <p className="text-center text-gray-600 dark:text-gray-400 text-lg">
          Loading...
        </p>
      ) : error ? (
        <p className="text-center text-red-500 dark:text-red-400 text-lg">
          {error}
        </p>
      ) : posts.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400 text-lg">
          No posts found
        </p>
      ) : (
        <div className="max-w-5xl mx-auto space-y-8">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-gray-50 dark:bg-gray-950 border rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <FaUserCircle className="text-3xl text-gray-500 dark:text-gray-300 mr-3" />
                <p className="text-sm font-bold md:text-lg  text-gray-800 dark:text-white">
                  {post.name}
                </p>
              </div>

              <div className="mb-4">
                <p className="text-xs md:text-lg text-gray-700 text-start dark:text-gray-300">
                  {post.description}
                </p>
              </div>

              <div className="mb-4">
                <p className="text-sm md:text-lg font-semibold text-start text-gray-600 dark:text-gray-300">
                  {post.title}
                </p>
              </div>

              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />
              )}

              <div className="flex items-center space-x-6">
                <button className="flex text-sm md:text-lg items-center text-gray-600 dark:text-gray-400 dark:hover:text-blue-500 hover:text-blue-500">
                  <FaThumbsUp className="mr-2 text-sm md:text-lg" /> Like
                </button>
                <button className="flex text-sm md:text-lg items-center text-gray-600 dark:text-gray-400  dark:hover:text-blue-500 hover:text-blue-500">
                  <FaCommentAlt className="mr-2 text-sm md:text-lg" /> Comment
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
