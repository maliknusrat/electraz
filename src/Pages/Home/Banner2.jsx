import img from "../../assets/THG_M470_05.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Banner2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animate every time it enters view
    threshold: 0.2, // 20% visible to trigger
  });

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div
      ref={ref}
      className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto py-20"
    >
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div>
          <div className="flex items-start justify-start">
            <h2 className="text-[32px] text-black">
              Electra
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D4FC] from-6.75% to-[#00FEE3] to-95.73%">
                Z
              </span>
            </h2>
          </div>

          <div>
            <h1 className="text-5xl font-bold w-[400px] py-10">
              Earn free money with Electraz
            </h1>
            <p className="text-zinc-400 pb-10">
              With Electraz you will get freeship & savings combo...
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="btn btn-neutral rounded-3xl">
              Savings Combo
            </button>
            <button className="btn btn-neutral btn-outline rounded-3xl">
              Discover More
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeRight}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <img className="w-[600px]" src={img} alt="Electraz Product" />
      </motion.div>
    </div>
  );
};

export default Banner2;
