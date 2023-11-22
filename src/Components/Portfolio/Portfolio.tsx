import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const projects = [
  {
    name: "e-bikes-rental",
    description:
      "a fullstack project that is designed to handle bicycle reservations at a local bike rental company its functionalities include operations on reservation boards and sending emails",
    tags: [
      { name: "React" },
      { name: "Redux" },
      { name: "mongodb" },
      { name: "node.js" },
    ],
    image: "/projects/e-bikes.png",
    source_code_link: "https://github.com/cragHerk/e-bikes-rental",
  },
  {
    name: "e-bikes-rental",
    description:
      "a fullstack project that is designed to handle bicycle reservations at a local bike rental company its functionalities include operations on reservation boards and sending emails",
    tags: [
      { name: "React" },
      { name: "Redux" },
      { name: "mongodb" },
      { name: "node.js" },
    ],
    image: "/projects/e-bikes.png",
    source_code_link: "https://github.com/cragHerk/e-bikes-rental",
  },
  {
    name: "e-bikes-rental",
    description:
      "a fullstack project that is designed to handle bicycle reservations at a local bike rental company its functionalities include operations on reservation boards and sending emails",
    tags: [
      { name: "React" },
      { name: "Redux" },
      { name: "mongodb" },
      { name: "node.js" },
    ],
    image: "/projects/e-bikes.png",
    source_code_link: "https://github.com/cragHerk/e-bikes-rental",
  },
];

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <div className=" p-3  bg-gradient-to-b from-indigo-900 to-slate-900 rounded flex justify-center items-center flex-col">
      <img className="rounded " src={image} alt="project_image" />

      <div className=" w-full text-left">
        <h3 className="text-white mt-2 font-bold">{name}</h3>
        <p className="text-white text-xs">{description}</p>
      </div>
      <div className="flex w-full text-left">
        {tags.map((tag) => (
          <p className="text-white text-xs mx-1" key={`${name}-${tag.name}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  return (
    <div className="mx-auto px-8 py-12 my-[150px]  flex max-w-7xl   flex-col">
      <div className="md:px-8 mb-8">
        <motion.p
          className="text-slate-400 text-l ml-[2px]"
          ref={ref}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
        >
          My work
        </motion.p>
        <motion.h2
          className="max-w-lg text-4xl text-indigo-500 font-bold md:text-5xl"
          ref={ref}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
        >
          Projects
        </motion.h2>
        <p className="text-slate-400 mt-5 ml-[2px] ">
          Selected portfolio projects
        </p>
      </div>

      <div className="grid place-items-center sm:grid-cols-2 md:grid-cols-3 gap-2">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;