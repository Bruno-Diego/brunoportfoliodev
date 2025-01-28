"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

interface Blog {
  id: number;
  name: string;
  posts: {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    imageUrl?: string;
  }[];
}

const Blogposts = () => {
  const [blogs, setBlogs] = useState<Blog[] | null>(null);

  useEffect(() => {
    // Função para buscar os últimos posts
    const fetchLatestPosts = async () => {
      try {
        const response = await fetch("/api/latest-posts");
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching latest posts:", error);
      }
    };

    fetchLatestPosts();
  }, []);
  if (!blogs)
    return (
      <div className="flex flex-col space-y-3 z-0">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  return (
    <div id="blog" className="my-10 mx-10 md:mx-16">
      <motion.div>
        <p
          className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider`}
        >
          Here you can find some news from my blogs
        </p>
        <h2
          className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}
        >
          Blog posts.
        </h2>
      </motion.div>
      <motion.div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white bg-opacity-10 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold text-white mb-2">{blog.name}</h3>
            {blog.posts.map((post) => (
              <div key={post.id}>
                <h4 className="text-lg font-semibold text-white">
                  {post.title}
                </h4>
                {/* <p className="text-gray-300 mt-2 line-clamp-3">
                  {post.content}
                </p> */}
                {post.imageUrl && (
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    className="mt-4 rounded-lg w-full h-48 object-cover"
                    width={500}
                    height={500}
                  />
                )}
                <p className="text-sm text-gray-400 mt-2">
                  Posted on: {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Blogposts;
