import { useEffect, useRef, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useTypewriter from "react-typewriter-hook";

import { setSelected } from "../../State/Reducers/nav.slice";
import EncryptButton from "../EncryptButton/EncryptButton";
import { squareData, SquareData } from "../../utils/squareData";
const ShuffleHero = () => {
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      dispatch(setSelected("Home"));
    }
  }, [inView, dispatch]);
  const message = "od zera";

  const typewriter = useTypewriter(message);
  return (
    <section
      id="home"
      className="bg-neutral-950 w-full pt-[100px] px-8    grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto"
    >
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Siemanko
        </span>

        <h3 className="text-4xl md:text-6xl font-semibold text-white">
          <span>Strony internetowe</span>
          <motion.span
            className="ml-3"
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
          >
            {typewriter}
          </motion.span>
        </h3>

        <p className="text-base md:text-lg text-slate-300 my-4 md:my-6">
          Mam na imię Michał Backi, sprawię że Twój biznes stanie się widoczny w
          internecie. stworzę dla Ciebie stronę internetową, wystawię ją do
          internetu, zadbam o pozycjonowanie oraz bierzący serwis 24/7
        </p>

        <EncryptButton />
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
  const [squares, setSquares] = useState<JSX.Element[]>([]);

  const shuffleSquares = useCallback(() => {
    setSquares(generateSquares());

    timeoutRef.current = window.setTimeout(shuffleSquares, 3000);
  }, []);

  useEffect(() => {
    // Skracamy krytyczną ścieżkę: nie generuj/nie renderuj ciężkiej siatki
    // zanim przeglądarka wykona pierwszy paint.
    const schedule = () => {
      if ("requestIdleCallback" in window) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).requestIdleCallback(() => {
          shuffleSquares();
        });
        return;
      }

      requestAnimationFrame(() => {
        shuffleSquares();
      });
    };

    schedule();

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [shuffleSquares]);

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1 [overflow-anchor:none] ">
      {squares}
    </div>
  );
};

export default ShuffleHero;
