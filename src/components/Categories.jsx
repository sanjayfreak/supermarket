import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { categories } from "../data";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Categories() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 220, behavior: "smooth" });
  };

  return (
    <section className="py-16 px-4" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold mb-1"
              style={{ color: "#F57C00", fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              Browse by category
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-black"
              style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a" }}
            >
              Shop by Category
            </motion.h2>
          </div>
          <div className="hidden sm:flex gap-2">
            {[ChevronLeft, ChevronRight].map((Icon, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.93 }}
                onClick={() => scroll(i === 0 ? -1 : 1)}
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: i === 1 ? "#2E7D32" : "#f3f4f6", color: i === 1 ? "white" : "#374151" }}
              >
                <Icon size={18} />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Scrollable row */}
        <motion.div
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex gap-4 overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((cat) => (
            <CategoryCard key={cat.id} cat={cat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CategoryCard({ cat }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.06,
        rotateX: -4,
        rotateY: 4,
        boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
        transition: { duration: 0.25 },
      }}
      whileTap={{ scale: 0.95 }}
      className="flex-shrink-0 flex flex-col items-center justify-center gap-3 rounded-2xl cursor-pointer select-none"
      style={{
        width: 130,
        height: 130,
        background: cat.bg,
        border: `1.5px solid ${cat.color}22`,
        perspective: 800,
      }}
    >
      <motion.span
        className="text-4xl"
        whileHover={{ scale: 1.2, rotate: [0, -8, 8, 0] }}
        transition={{ duration: 0.4 }}
      >
        {cat.emoji}
      </motion.span>
      <p
        className="text-sm font-bold"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: cat.color }}
      >
        {cat.name}
      </p>
    </motion.div>
  );
}
