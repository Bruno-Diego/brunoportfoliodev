"use client"
import React from "react";
import { motion } from "framer-motion";

const Blogposts = () => {
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
          Blog.
        </h2>
      </motion.div>
      <motion.div>
        
      </motion.div>
    </div>
  );
};

export default Blogposts;
