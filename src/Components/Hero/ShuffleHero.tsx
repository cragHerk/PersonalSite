import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
type SquareData = {
  id: number;
  src: string;
};
const ShuffleHero = () => {
  return (
    <section className="bg-neutral-950 w-full mt-[80px] px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Let's connect
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold text-white">
          Web Dev was never this easy
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Hello, I'm Michał Backi, a web developer. I am driven and ambitious,
          aspiring to further develop my skills in this field and undertake
          exciting new projects. Feel free to reach out to me.
        </p>
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Contact me
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: SquareData[]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/heroImgs/1r.jpg",
  },
  {
    id: 2,
    src: "/heroImgs/2r.jpg",
  },
  {
    id: 3,
    src: "/heroImgs/3r.jpg",
  },
  {
    id: 4,
    src: "/heroImgs/4r.jpg",
  },
  {
    id: 5,
    src: "/heroImgs/5r.jpg",
  },
  {
    id: 6,
    src: "/heroImgs/6r.jpg",
  },
  {
    id: 7,
    src: "/heroImgs/7r.jpg",
  },
  {
    id: 8,
    src: "/heroImgs/8r.jpg",
  },
  {
    id: 9,
    src: "/heroImgs/9r.jpg",
  },
  {
    id: 10,
    src: "/heroImgs/10r.jpg",
  },
  {
    id: 11,
    src: "/heroImgs/11r.jpg",
  },
  {
    id: 12,
    src: "/heroImgs/12r.jpg",
  },
  {
    id: 13,
    src: "/heroImgs/13r.jpg",
  },
  {
    id: 14,
    src: "/heroImgs/14r.jpg",
  },
  {
    id: 15,
    src: "/heroImgs/15r.jpg",
  },
  {
    id: 16,
    src: "/heroImgs/16r.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<number | null>(null);
  const [squares, setSquares] = useState(generateSquares());
  const shuffleSquares = useCallback(() => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  }, []);
  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [shuffleSquares]);

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
