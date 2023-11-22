import { motion } from "framer-motion";

export const BouncyCardsFeatures = () => {
  return (
    <section
      id="about"
      className="mx-auto px-8 py-12 max-w-7xl  text-slate-800"
    >
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl text-indigo-500 font-bold md:text-5xl">
          Grow faster with our
          <span className="text-slate-400"> all in one solution</span>
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
        >
          Contact me
        </motion.button>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4 bg-gradient-to-br from-purple-600 to-violet-800">
          <CardTitle>Define a niche</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-[url('/features/niche.jpg')] bg-cover bg-no-repeat from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]"></div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8 bg-gradient-to-br from-indigo-500 to-blue-900">
          <CardTitle>Tell us what your requirements are</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-[url('/features/req.jpg')] bg-cover bg-no-repeat from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]"></div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8 bg-gradient-to-br from-pink-800 to-orange-800">
          <CardTitle>Now let's create your website</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-[url('/features/creater.jpg')] bg-cover bg-no-repeat from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]"></div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4 bg-gradient-to-br from-orange-500 to-orange-900">
          <CardTitle>Level Up your busisness</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-[url('/features/boost.jpg')] bg-cover bg-no-repeat  p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]"></div>
        </BounceCard>
      </div>
    </section>
  );
};
type BounceCardProps = {
  className?: string;
  children: React.ReactNode;
};
const BounceCard = ({ className, children }: BounceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};
type CardTitleProps = {
  children: React.ReactNode;
};
const CardTitle = ({ children }: CardTitleProps) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};
