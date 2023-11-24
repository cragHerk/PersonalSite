import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { EarthCanvas } from "../canvas";
const Contact = () => {
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
    <div
      id="contact"
      className="flex flex-col  md:flex-row justify-center items-center my-24"
    >
      <motion.div
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
        className="  mt-[80px] px-8 py-12   w-[380px]   bg-slate-900 rounded"
      >
        <p className="text-violet-300 text-xs">Get in touch</p>
        <h2 className="text-white text-4xl font-extrabold mb-5">Contact</h2>
        <form>
          <div className="flex flex-col">
            <label className="text-white py-3 font-bold" htmlFor="name">
              Your Name
            </label>
            <input
              className="w-[300px] bg-indigo-900 rounded pl-2 py-1 outline-none"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white py-3 font-bold" htmlFor="email">
              Your Email
            </label>
            <input
              className="w-[300px] bg-indigo-900 rounded pl-2 py-1 outline-none"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white py-3 font-bold" htmlFor="message">
              Your Message
            </label>
            <textarea
              className="w-[300px] max-h-[150px] min-h-[5rem] bg-indigo-900 rounded pl-2 py-1 outline-none"
              id="message"
              name="message"
              required
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              className="mt-7 w-2/3  whitespace-nowrap rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:scale-105 transition-transform"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
        className="w-[450px] h-[450px] mx-8 my-12 "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default Contact;
