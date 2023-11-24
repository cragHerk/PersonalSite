import images from "../../utils/footerLogo";
import "./logo.css";
import { useEffect, useRef } from "react";

const ScrollerComponent: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollers = scrollerRef.current?.querySelectorAll(".scroller");

    if (
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      scrollers
    ) {
      addAnimation(scrollers);
    }
  }, []);

  const addAnimation = (scrollers: NodeListOf<Element>) => {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector(".scroller__inner");

      if (scrollerInner) {
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as Element;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      }
    });
  };
  const colors = [
    "rgb(97, 219, 251)",
    "rgb(240, 219, 79)",
    "rgb(115, 138, 219)",
    "rgb(253, 253, 253)",
    "rgb(0, 149, 217)",
  ];
  return (
    <div
      ref={scrollerRef}
      className="w-screen flex items-center justify-center pt-24 pb-24 bg-gradient-to-b from-custom-black to-slate-900"
    >
      <div className="scroller" data-direction="right" data-speed="slow">
        <div className="scroller__inner ">
          {images.map((Icon, index) => {
            return (
              <Icon
                key={index}
                size={60}
                className="mx-8"
                color={colors[index]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScrollerComponent;
