import { motion } from "framer-motion";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSelected } from "../../State/Reducers/nav.slice";

const Contact = () => {
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) dispatch(setSelected("Contact"));
  }, [inView, dispatch]);
  return (
    <motion.section
      ref={ref}
      id="contact"
      animate={{
        y: inView ? 0 : 60,
        opacity: inView ? 1 : 0,
      }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="py-[100px] flex justify-center items-center bg-transparent my-24"
    >
      <div className="w-full max-w-5xl px-4">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <p className="text-violet-300 text-xs">Zostańmy w kontakcie</p>
          <h2 className="text-white text-4xl font-extrabold">Kontakt</h2>
          <p className="text-slate-300 mt-3 text-sm">
            Szybki kontakt — telefon lub Facebook.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-stretch justify-center">
          <div className="flex-1 bg-slate-900/60 border border-slate-700 rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-violet-600/20 text-violet-300">
                <FaPhoneAlt size={22} />
              </span>
              <div className="text-left">
                <p className="text-slate-300 text-xs">Telefon</p>
                <a
                  className="text-white text-xl font-bold hover:text-violet-300 transition-colors"
                  href="tel:+48123123123"
                >
                  +48 609343752
                </a>
              </div>
            </div>

            <div className="mt-5 text-slate-300 text-sm">
              Napisz lub zadzwoń — odpowiadam w miarę możliwości.
            </div>
          </div>

          <div className="flex-1 bg-slate-900/60 border border-slate-700 rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-violet-600/20 text-violet-300">
                <FaFacebookF size={22} />
              </span>
              <div className="text-left">
                <p className="text-slate-300 text-xs">Facebook</p>
                <a
                  className="text-white text-xl font-bold hover:text-violet-300 transition-colors"
                  href="https://www.facebook.com/michalback2222"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  facebook.com
                </a>
              </div>
            </div>

            <div className="mt-5 text-slate-300 text-sm">
              Daj znać przez wiadomość .
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
