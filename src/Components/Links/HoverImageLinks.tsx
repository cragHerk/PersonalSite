import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const HoverImageLinks = () => {
  return (
    <section className="bg-neutral-950 p-4 mt-[200px] mb-[200px] md:p-8">
      <div className="mx-auto max-w-5xl">
        <Link
          heading="About"
          subheading="Learn what we do here"
          imgSrc="/links/1r.jpg"
          href="#"
        />
        <Link
          heading="Clients"
          subheading="We work with great people"
          imgSrc="/links/2r.jpg"
          href="#"
        />
        <Link
          heading="Portfolio"
          subheading="Our work speaks for itself"
          imgSrc="/links/3r.jpg"
          href="#"
        />
        <Link
          heading="Contact"
          subheading="Get in touch with me"
          imgSrc="/links/6r.jpg"
          href="#"
        />
      </div>
    </section>
  );
};
type LinkProps = {
  heading: string;
  imgSrc: string;
  subheading: string;
  href: string;
};
const Link = ({ heading, imgSrc, subheading, href }: LinkProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (ref.current !== null) {
      const rect = ref.current.getBoundingClientRect();

      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      x.set(xPct);
      y.set(yPct);
    }
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative block border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <motion.span
        variants={{
          initial: { x: 0 },
          whileHover: { x: -16 },
        }}
        transition={{
          type: "spring",
          staggerChildren: 0.075,
          delayChildren: 0.25,
        }}
        className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
      >
        {heading.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: [0, 16] },
            }}
            transition={{ type: "spring" }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </motion.span>
      <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
        {subheading}
      </span>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="absolute bottom-0 right-0 top-0 z-10 grid place-content-center p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};
