"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import Image from "next/image";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz2FhOVUT6w3sxuvoQTEvrNAZRyxfPw9DeFLa0MHCj4Fx2c9xWOh3ZBzasY02jDPXxM/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      console.log(response);

      setMessage("Thank you for subscribing!");
      setEmail("");
      // if (response.ok) {
      // } else {
      //   setMessage("Something went wrong. Please try again.");
      // }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div
      id="about"
      className={`my-10 mx-10 md:mx-16 xl:mt-12 flex xl:flex-row flex-col-reverse overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-white bg-opacity-10 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <p
          className={`sm:text-[18px] text-[14px] text-secondary tracking-wider`}
        >
          About me
        </p>
        <h3
          className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}
        >
          The Creator.
        </h3>

        <div>
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <Image
              src="https://lh3.googleusercontent.com/a/ACg8ocI66Ndu3cmVxBEiwfUD-ULVYWQTVaIbBiSNqOhKxmEYz8iail0=s432-c-no" // Replace with your photo path
              alt="Editor"
              width={500}
              height={500}
              className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full shadow-md"
            />
            <div className="text-white">
              <p className="mt-2 leading-relaxed">
                Hello! I&apos;m Bruno, the editor and creator behind this blog.
                With a passion for uncovering the latest trends and sharing
                meaningful insights, I&apos;ve dedicated myself to creating
                content that not only informs but also inspires.
              </p>
              <p className="mt-4 leading-relaxed">
                My journey as a writer began years ago, fueled by an insatiable
                curiosity and a love for storytelling. Over time, I&apos;ve
                developed expertise in analyzing complex topics and breaking
                them down into engaging, easy-to-understand articles for readers
                from all walks of life.
              </p>
              <p className="mt-4 leading-relaxed">
                Outside of blogging, I enjoy technology, games and music, which
                often influence the unique perspective I bring to my writing. I
                believe that knowledge is power, and through this blog, I aim to
                empower my audience with information, ideas, and a fresh take on
                the world around us.
              </p>
            </div>
          </div>
        </div>
        {/* Call-to-Action */}
        <section className="text-center my-4">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Stay Connected
          </h2>
          <p className="text-white leading-relaxed mb-6">
            Join our community and never miss out on the latest updates. Follow
            us on social media and subscribe to our newsletter for a daily dose
            of inspiration.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="px-4 py-2 mb-4 w-64 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Subscribe Now
            </button>
          </form>
          {message && <p className="text-white mt-4">{message}</p>}
        </section>
      </motion.div>
    </div>
  );
};

export default Contact;
