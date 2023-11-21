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

  return (
    <div
      ref={scrollerRef}
      className="w-screen flex justify-center mt-24 pb-24 bg-gradient-to-b from-custom-black to-slate-900"
    >
      <div className="scroller" data-direction="right" data-speed="slow">
        <div className="scroller__inner">
          {images.map((image, index) => {
            return (
              <img src={image} key={index} className="w-[70px] h-[70px] mx-9" />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScrollerComponent;
