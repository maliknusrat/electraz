import img1 from "../../assets/search_3179891.png";
import img2 from "../../assets/shopping-cart_2331970.png";
import img3 from "../../assets/smartwatch_5973447.png";
import img4 from "../../assets/product_4889260.png";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const letters = ["O", "R", "D", "E", "R", "P", "R", "O", "C", "E", "S", "S"];

const stepVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  hiddenUp: { opacity: 0, y: 100 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6 } },
};

const StepBox = ({
  step,
  title,
  desc,
  img,
  bgColor,
  textColor,
  direction = "up",
}) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const initialVariant =
    direction === "left"
      ? "hiddenLeft"
      : direction === "right"
      ? "hiddenRight"
      : "hiddenUp";

  return (
    <motion.div
      ref={ref}
      variants={stepVariants}
      initial={initialVariant}
      animate={inView ? "visible" : initialVariant}
      className="flex flex-col items-center gap-4 py-20 justify-center"
    >
      <img className="my-15 w-20" src={img} alt={`Step ${step}`} />
      <div className={`${bgColor} rounded-3xl w-16`}>
        <h1
          className={`text-xs p-1 text-center ${textColor}`}
        >{`Step-${step}`}</h1>
      </div>
      <div>
        <h1 className="text-xl font-semibold py-3 text-center">{title}</h1>
        <h1 className="text-lg font-light w-[250px] text-center">{desc}</h1>
      </div>
    </motion.div>
  );
};


const OrderProcess = () => {
  const [visibleLetters, setVisibleLetters] = useState([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    letters.forEach((letter, index) => {
      setTimeout(() => {
        setVisibleLetters((prev) => [...prev, letter]);
      }, index * 200);
    });
  }, []);

  return (
    <div className="my-9 max-w-6xl mx-auto">
      {/* Animated Text Heading */}
      <div className="flex items-center justify-between">
        <div className="text-xl md:text-3xl py-5 flex font-bold">
          {visibleLetters.map((char, index) => (
            <span
              key={index}
              className={`transition-opacity duration-500 ${
                char === "P" ? "ml-2" : ""
              }`}
            >
              {char}
            </span>
          ))}
        </div>
        <div>
          <DotLottieReact
            src="https://lottie.host/fbf0f2fd-ad6c-427c-9fed-96ddfd5a4132/DAD510YybP.lottie"
            loop
                      autoplay
                      className="h-52 w-52"
          />
        </div>
      </div>

      {/* Step Section */}
      <div className="border-y-[1px]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 flex-wrap">
          <StepBox
            step={1}
            title="Filter & Discover"
            desc="Smart filtering and suggestions make it easy to find"
            img={img1}
            bgColor="bg-red-200"
            textColor="text-red-500"
            direction="left"
          />
          <StepBox
            step={2}
            title="Add to bag"
            desc="Easily select the correct items and add them to the cart"
            img={img2}
            bgColor="bg-blue-100"
            textColor="text-blue-500"
            direction="up"
          />
          <StepBox
            step={3}
            title="Fast shipping"
            desc="The carrier will confirm and ship quickly to you"
            img={img3}
            bgColor="bg-amber-100"
            textColor="text-amber-600"
            direction="up"
          />
          <StepBox
            step={4}
            title="Enjoy the product"
            desc="Have fun and enjoy your 5-star quality products"
            img={img4}
            bgColor="bg-lime-100"
            textColor="text-lime-600"
            direction="right"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderProcess;
