import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../../utils/projects";
import { FaSquareGithub } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setSelected } from "../../State/Reducers/nav.slice";
interface ProjectCardProps {
  name: string;
  description: string;
  tags: { name: string; color?: string }[];
  image: string;
  source_code_link: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (inView) {
      dispatch(setSelected("Portfolio"));
    }
  }, [inView, dispatch]);
  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
      className=" p-3 relative  bg-gradient-to-b from-indigo-900 to-slate-900 rounded space-y-2 flex flex-col md:h-[400px] "
      onMouseEnter={() => setIsModalOpen(true)}
      onMouseLeave={() => setIsModalOpen(false)}
    >
      <img
        className="rounded h-[200px]  md:h-[250px] w-full "
        src={image}
        alt="project_image"
      />
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.5 }}
          className="rounded absolute bottom-[1px] left-0 bg-indigo-800 opacity-50 w-full h-full "
        >
          <a
            href={source_code_link}
            className="absolute right-5 top-5"
            title="github link"
          >
            <FaSquareGithub size={24} />
          </a>
        </motion.div>
      )}

      <div className=" w-full text-left">
        <h3 className="text-white mt-2 font-bold">{name}</h3>
        <p className="text-slate-300 text-xs mb-2">{description}</p>
      </div>
      <div className="flex w-full text-left absolute bottom-2">
        {tags.map((tag) => (
          <p
            className={`text-xs mx-1 ${tag.color}`}
            key={`${name}-${tag.name}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      id="portfolio"
      className="mx-auto px-8 py-12 py-[100px]  flex max-w-7xl   flex-col mt-[80px]"
    >
      <div className="md:px-8 mb-8">
        <motion.p
          className="text-slate-400 text-l ml-[2px]"
          ref={ref}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
        >
          My work
        </motion.p>
        <motion.h2
          className="max-w-lg text-4xl text-indigo-500 font-bold md:text-5xl"
          ref={ref}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
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
