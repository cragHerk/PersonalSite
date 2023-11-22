import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const tabs = [
  <Link to="/">Home</Link>,
  <Link to="/about">About</Link>,
  <Link to="/portfolio">Portfolio</Link>,
];

const ChipTabs = () => {
  const [selected, setSelected] = useState<string | JSX.Element>(tabs[0]);

  return (
    <div className="px-4 py-10 bg-slate-900 flex items-center  flex-wrap gap-2 w-screen z-[20] fixed top-0">
      {tabs.map((tab, index) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={index}
        />
      ))}
    </div>
  );
};
type ChipProps = {
  text: string | JSX.Element;
  selected: boolean;
  setSelected: (value: string | JSX.Element) => void;
};
const Chip = ({ text, selected, setSelected }: ChipProps) => {
  return (
    <button
      onClick={() => typeof text === "string" && setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

export default ChipTabs;
