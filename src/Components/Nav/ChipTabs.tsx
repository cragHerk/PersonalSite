import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelected,
  selectSelected,
  setScrolling,
} from "../../State/Reducers/nav.slice";

const tabs = ["Home", "Portfolio", "About", "Contact"];

const ChipTabs = () => {
  const dispatch = useDispatch();
  const selected = useSelector(selectSelected);

  return (
    <div className="px-4 py-8 bg-slate-900 flex items-center  flex-wrap gap-2 w-screen z-[20] fixed top-0">
      {tabs.map((tab, index) => (
        <div onClick={() => dispatch(setSelected(tab))} key={index}>
          <Link
            to={tab.toLowerCase()}
            smooth={true}
            onSetActive={() => {
              dispatch(setScrolling(false));
            }}
            onSetInactive={() => {
              dispatch(setScrolling(false));
            }}
          >
            <Chip
              text={tab}
              selected={selected === tab}
              setSelected={() => dispatch(setSelected(tab))}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};
type ChipProps = {
  text: string | JSX.Element;
  selected: boolean;
  setSelected: (selected: string) => void;
};

const Chip = ({ text, selected, setSelected }: ChipProps) => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof text === "string") {
          setSelected(text);
          dispatch(setScrolling(true));
          setTimeout(() => {
            dispatch(setScrolling(false));
          }, 1000);
        }
      }}
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
