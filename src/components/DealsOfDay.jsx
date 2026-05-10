import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, ShoppingCart } from "lucide-react";
import { deals } from "../data";

function FlipNumber({ value }) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={value}
        initial={{ rotateX: -90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        exit={{ rotateX: 90, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{ display: "inline-block" }}
      >
        {String(value).padStart(2, "0")}
      </motion.span>
    </AnimatePresence>
  );
}

function CountdownTimer() {
  const getTime = () => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(23, 59, 59, 0);
    const diff = midnight - now;
    return {
      h: Math.floor(diff / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  };

  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const id = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Hours", val: time.h },
    { label: "Mins", val: time.m },
    { label: "Secs", val: time.s },
  ];

  return (
    <div className="flex items-center gap-3">
      {units.map((u, i) => (
        <div key={u.label} className="flex items-center gap-1">
          <div
            className="flex flex-col items-center justify-center rounded-xl px-3 py-2 min-w-[52px]"
            style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)" }}
          >
            <span className="text-2xl font-black text-white" style={{ fontFamily: "'Outfit', sans-serif", lineHeight: 1 }}>
              <FlipNumber value={u.val} />
            </span>
            <span className="text-xs text-white/70 mt-0.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{u.label}</span>
          </div>
          {i < 2 && <span className="text-2xl font-black text-white/60">:</span>}
        </div>
      ))}
    </div>
  );
}

export default function DealsOfDay({ onAddToCart }) {
  return (
    <section className="py-16 px-4 overflow-hidden" style={{ background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #1a1a1a 100%)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Zap size={22} fill="#F57C00" color="#F57C00" />
              </motion.div>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange-300" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Flash Sale
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Deals of the Day
            </h2>
          </div>
          <CountdownTimer />
        </div>

        {/* Deal cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {deals.map((deal, i) => (
            <DealCard key={deal.id} deal={deal} delay={i * 0.12} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DealCard({ deal, delay, onAddToCart }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart({ ...deal, price: deal.dealPrice, name: deal.name });
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, boxShadow: "0 24px 50px rgba(0,0,0,0.25)" }}
      className="rounded-2xl overflow-hidden cursor-pointer"
      style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(10px)" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: 200 }}>
        <motion.img
          src={deal.image}
          alt={deal.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4 }}
        />
        {/* Discount badge */}
        <motion.div
          animate={{ rotate: [0, -3, 3, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute top-3 right-3 w-14 h-14 rounded-full flex flex-col items-center justify-center"
          style={{ background: "#F57C00", boxShadow: "0 4px 14px rgba(245,124,0,0.5)" }}
        >
          <span className="text-white font-black text-sm leading-none" style={{ fontFamily: "'Outfit', sans-serif" }}>{deal.discount}%</span>
          <span className="text-white/80 text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>OFF</span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-white mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{deal.name}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>₹{deal.dealPrice}</span>
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-sm line-through text-white/50"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              ₹{deal.originalPrice}
            </motion.span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAdd}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold"
            style={{ background: added ? "#16a34a" : "#F57C00", color: "white", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <ShoppingCart size={15} />
            {added ? "Added!" : "Add"}
          </motion.button>
        </div>
        {/* Savings */}
        <p className="text-xs mt-2" style={{ color: "#86efac", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          🎉 You save ₹{deal.originalPrice - deal.dealPrice}
        </p>
      </div>
    </motion.div>
  );
}
