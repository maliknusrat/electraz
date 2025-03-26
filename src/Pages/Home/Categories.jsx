import img1 from "../../assets/11873.jpg";
import img3 from "../../assets/black-headphones-digital-device.jpg";
import img4 from "../../assets/laptop-balancing-with-purple-background.jpg";
import img5 from "../../assets/smartphone-balancing-with-pink-background.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const categories = [
  { id: 1, title: "Smart Watches", count: "50+ Categories", img: img1 },
  { id: 2, title: "Headphones", count: "20+ Categories", img: img3 },
  { id: 3, title: "Laptops", count: "50+ Categories", img: img4 },
  { id: 4, title: "Smart Phones", count: "50+ Categories", img: img5 },
];

const Categories = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="max-w-6xl mx-auto mb-20 px-4">
      <motion.h1
        className="text-4xl font-bold text-center py-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Shop By Sections
      </motion.h1>

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
      >
        {categories.map((item, i) => (
          <motion.div
            key={item.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col items-center text-center bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="overflow-hidden rounded-md mb-4">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                src={item.img}
                alt={item.title}
                className="w-[220px] h-[180px] object-cover rounded-md border"
              />
            </div>
            <h1 className="text-xl font-bold">{item.title}</h1>
            <p className="text-sm text-slate-500 font-light">{item.count}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
