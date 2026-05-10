import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../data";

const colors = ["#2E7D32", "#F57C00", "#7C3AED"];
const bgs = ["#f0fdf4", "#fff7ed", "#faf5ff"];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const go = (dir) => {
    setDirection(dir);
    setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (dir) => ({ x: dir * 80, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
    exit: (dir) => ({ x: dir * -80, opacity: 0, scale: 0.95, transition: { duration: 0.3 } }),
  };

  return (
    <section className="py-20 px-4" style={{ background: "#fafafa" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold mb-2 uppercase tracking-widest"
            style={{ color: "#F57C00", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Customer Love
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-black"
            style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a" }}
          >
            What Our Customers Say
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="rounded-3xl p-8 lg:p-12 relative overflow-hidden"
              style={{
                background: bgs[current],
                border: `1.5px solid ${colors[current]}18`,
                boxShadow: `0 24px 60px ${colors[current]}12`,
              }}
            >
              {/* Quote icon */}
              <Quote
                size={80}
                className="absolute top-6 right-8 opacity-[0.07]"
                color={colors[current]}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <motion.div
                    key={s}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: s * 0.06 }}
                  >
                    <Star size={20} fill="#F57C00" color="#F57C00" />
                  </motion.div>
                ))}
              </div>

              <p
                className="text-lg lg:text-2xl font-medium leading-relaxed mb-8"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#1a1a1a", maxWidth: 700 }}
              >
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-base font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${colors[current]}, ${colors[current]}bb)` }}
                >
                  {testimonials[current].avatar}
                </div>
                <div>
                  <p className="font-bold" style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a" }}>
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-gray-500" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex items-center justify-center gap-4 mt-6">
            {[
              { icon: ChevronLeft, dir: -1 },
              { icon: ChevronRight, dir: 1 },
            ].map(({ icon: Icon, dir }, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => go(dir)}
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "white", border: "1.5px solid #e5e7eb", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
              >
                <Icon size={18} color="#374151" />
              </motion.button>
            ))}

            {/* Dots */}
            <div className="flex gap-2 ml-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  animate={{ width: i === current ? 24 : 8, background: i === current ? "#2E7D32" : "#d1d5db" }}
                  className="h-2 rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
