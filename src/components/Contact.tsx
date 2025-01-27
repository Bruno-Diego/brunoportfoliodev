"use client";
import React from "react";
import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

import { slideIn } from "../utils/motion";

const Contact = () => {
  

  return (
    <div
      id="contact"
      className={`my-10 mx-10 md:mx-16 xl:mt-12 flex xl:flex-row flex-col-reverse overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] w-full mx-auto bg-black-100 p-8 rounded-2xl"
      >
        <p
          className={`sm:text-[18px] text-[14px] text-secondary tracking-wider`}
        >
          Fill the form below or send me an e-mail at bruno.diego.x@hotmail.com
        </p>
        <h3
          className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}
        >
          Contact.
        </h3>

        <div>
          <p>Under development</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
