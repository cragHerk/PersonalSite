import { FiCheckSquare } from "react-icons/fi";
import { motion } from "framer-motion";
interface NotifyProps {
  message: string;
}
const Notify = ({ message }: NotifyProps) => {
  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ y: -15, scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="p-2 flex items-start rounded gap-2 text-xs font-medium shadow-lg text-white bg-indigo-500 pointer-events-auto fixed right-[25px] top-[25px] z-50"
    >
      <FiCheckSquare className=" mt-0.5" />
      <span>{message}</span>
    </motion.div>
  );
};

export default Notify;
