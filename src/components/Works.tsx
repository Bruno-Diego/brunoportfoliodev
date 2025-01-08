"use client";
import React from "react";
import { Tilt } from "react-next-tilt";
import { motion } from "framer-motion";
import { projects } from "@/constants/index";
import { fadeIn, textVariant } from "@/utils/motion";
// import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Define the types for the tags and project props
interface Tag {
  name: string;
  color: string;
}

interface Project {
  index: number;
  name: string;
  description: string;
  tags: Tag[];
  // image: StaticImageData;
  source_code_link: string;
}

const ProjectCard: React.FC<Project> = ({
  index,
  name,
  description,
  tags,
  // image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="mx-auto"
    >
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1.1}
        // speed={450}speed
        lineGlareEnable
        shadowEnable
        spotGlareColor={"black"}
        className="p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <Link href={source_code_link} target="_blank" className="relative w-full h-[230px] cursor-pointer">
          <div className="relative w-full h-[230px] cursor-pointer">
            {/* <Image
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          /> */}
            <div className="w-full h-full overflow-hidden">
              <iframe
                src={source_code_link}
                className="w-full h-full rounded-2xl overflow-hidden"
                scrolling="no" // Prevents scrollbars in the iframe
                style={{
                  border: "none", // Removes border
                  transformOrigin: "0 0", // Mantém o ponto de origem no topo esquerdo
                  transform: "scale(0.2)", // Ajuste o valor conforme necessário
                  width: "500%",
                  height: "500%",
                  overflow: "hidden", // Hides scrollbars
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
            <Image
            src={github}
            alt="source code"
            className="w-1/2 h-1/2 object-contain"
            />
            </div>
            </div> */}
          </div>
        </Link>

        <div className="mt-5">
          <h3 className="text-stone-300 font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-stone-400 text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] text-white`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div id="work" className="my-10 mx-10 md:mx-16">
      <motion.div variants={textVariant()}>
        <p
          className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider`}
        >
          My work
        </p>
        <h2
          className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}
        >
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-white text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 text-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Works;
