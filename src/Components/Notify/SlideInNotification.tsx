// import { useEffect, useState } from "react";
// import { FiCheckSquare, FiX } from "react-icons/fi";
// import { AnimatePresence, motion } from "framer-motion";

// const SlideInNotifications = () => {
//   const [notifications, setNotifications] = useState([]);

//   const removeNotif = (id) => {
//     setNotifications((pv) => pv.filter((n) => n.id !== id));
//   };

//   return <Notification removeNotif={removeNotif} {...n} key={n.id} />;
// };

// const NOTIFICATION_TTL = 5000;

// const Notification = ({ text, id, removeNotif }) => {
//   useEffect(() => {
//     const timeoutRef = setTimeout(() => {
//       removeNotif(id);
//     }, NOTIFICATION_TTL);

//     return () => clearTimeout(timeoutRef);
//   }, []);

//   return (
//     <motion.div
//       layout
//       initial={{ y: -15, scale: 0.95 }}
//       animate={{ y: 0, scale: 1 }}
//       exit={{ x: "100%", opacity: 0 }}
//       transition={{ duration: 0.35, ease: "easeOut" }}
//       className="p-2 flex items-start rounded gap-2 text-xs font-medium shadow-lg text-white bg-indigo-500 pointer-events-auto"
//     >
//       <FiCheckSquare className=" mt-0.5" />
//       <span>{text}</span>
//       <button onClick={() => removeNotif(id)} className="ml-auto mt-0.5">
//         <FiX />
//       </button>
//     </motion.div>
//   );
// };

// export default SlideInNotifications;

// const generateRandomNotif = () => {
//   const names = [
//     "John Anderson",
//     "Emily Peterson",
//     "Frank Daniels",
//     "Laura Williams",
//     "Donald Sanders",
//     "Tom Smith",
//     "Alexandra Black",
//   ];

//   const randomIndex = Math.floor(Math.random() * names.length);

//   const data = {
//     id: Math.random(),
//     text: `New notification from ${names[randomIndex]}`,
//   };

//   return data;
// };
