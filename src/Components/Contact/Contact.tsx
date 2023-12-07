import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { EarthCanvas } from "../canvas";
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "../../State/Reducers/nav.slice";
import { send } from "../../State/Reducers/send.slice";
import { AppDispatch } from "../../State/Store/store";
import { RootState } from "../../State/Store/store";
import Notify from "../Notify/Notify";
import { PulseLoader } from "react-spinners";
import ParticlesComponent from "../Particles/Particles";

const Contact = () => {
  const [showNotify, setShowNotify] = useState(false);
  const resStatus = useSelector((state: RootState) => state.send.status);
  const resMessage = useSelector(
    (state: RootState) => state.send.data?.message
  );
  const dispatch: AppDispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (resStatus === "loading") {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [resStatus]);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(send({ name, email, message }));
  };
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleBall, setIsVisibleBall] = useState(false);

  useEffect(() => {
    if (inView1) {
      setIsVisible(true);
      dispatch(setSelected("Contact"));
    }
  }, [inView1, dispatch]);
  useEffect(() => {
    if (inView2) {
      setIsVisibleBall(true);
    }
  }, [inView2]);

  useEffect(() => {
    if (resStatus === "succeeded") {
      setShowNotify(true);

      const timeoutRef = setTimeout(() => {
        setShowNotify(false);
      }, 5000);

      return () => clearTimeout(timeoutRef);
    }
  }, [resStatus]);
  return (
    <div
      id="contact"
      className="py-[100px] flex flex-col relative md:flex-row justify-center items-center bg-transparent my-24"
    >
      <ParticlesComponent />
      <AnimatePresence>
        {showNotify && resMessage && <Notify message={resMessage} />}
      </AnimatePresence>
      <motion.div
        ref={ref1}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
        className=" flex flex-col justify-center items-center  py-12   w-[380px]   bg-slate-900 rounded"
      >
        <p className="text-violet-300 text-xs">Get in touch</p>
        <h2 className="text-white text-4xl font-extrabold mb-5">Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-white py-3 font-bold" htmlFor="name">
              Your Name
            </label>
            <input
              className="w-[300px] text-white bg-indigo-900 focus:bg-indigo-900 active:bg-indigo-900 rounded pl-2 py-1 outline-none"
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white py-3 font-bold" htmlFor="email">
              Your Email
            </label>
            <input
              className="w-[300px] text-white bg-indigo-900 focus:bg-indigo-900 rounded pl-2 py-1 outline-none"
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white py-3 font-bold" htmlFor="message">
              Your Message
            </label>
            <textarea
              className="w-[300px] max-h-[150px] min-h-[5rem] text-white bg-indigo-900 focus:bg-indigo-900 rounded pl-2 py-1 outline-none"
              id="message"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              className="mt-7 w-2/3  whitespace-nowrap rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:scale-105 transition-transform"
              type="submit"
            >
              {isLoading ? <PulseLoader size={10} color="#FFFFFF" /> : "Send"}
            </button>
          </div>
        </form>
      </motion.div>
      <motion.div
        ref={ref2}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: isVisibleBall ? 0 : 100, opacity: isVisibleBall ? 1 : 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
        className="w-[450px] h-[450px] mx-8 my-12 "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default Contact;
