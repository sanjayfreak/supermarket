import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Star, Heart, Plus, Check } from "lucide-react";
import { products } from "../data";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function ProductCard({ product, onAddToCart }) {
  const [added, setAdded] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, boxShadow: "0 24px 50px rgba(0,0,0,0.11)" }}
      className="relative rounded-2xl overflow-hidden bg-white group"
      style={{ border: "1.5px solid #f3f4f6", boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}
    >
      {/* Badge */}
      {product.badge && (
        <div
          className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-xs font-bold"
          style={{
            background: product.badge === "Organic" ? "#dcfce7" : product.badge === "Best Seller" ? "#fff7ed" : "#eff6ff",
            color: product.badge === "Organic" ? "#16a34a" : product.badge === "Best Seller" ? "#ea580c" : "#2563eb",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          {product.badge}
        </div>
      )}

      {/* Like button */}
      <motion.button
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.85 }}
        onClick={() => setLiked(!liked)}
        className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center"
        style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(4px)" }}
      >
        <Heart size={16} fill={liked ? "#ef4444" : "transparent"} color={liked ? "#ef4444" : "#9ca3af"} />
      </motion.button>

      {/* Image */}
      <div className="overflow-hidden" style={{ height: 180 }}>
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs font-medium mb-1" style={{ color: "#9ca3af", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {product.category}
        </p>
        <h3 className="font-bold text-sm mb-2 line-clamp-2 leading-snug" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#1a1a1a", minHeight: 36 }}>
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={12} fill={s <= Math.round(product.rating) ? "#F57C00" : "transparent"} color={s <= Math.round(product.rating) ? "#F57C00" : "#d1d5db"} />
            ))}
          </div>
          <span className="text-xs text-gray-400" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price + Cart */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-black" style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a" }}>
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs line-through ml-1.5" style={{ color: "#9ca3af", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                ₹{product.originalPrice}
              </span>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAdd}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-white"
            style={{
              background: added ? "linear-gradient(135deg, #16a34a, #15803d)" : "linear-gradient(135deg, #2E7D32, #388E3C)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              minWidth: 90,
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(46,125,50,0.25)",
            }}
            animate={added ? { scale: [1, 1.12, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {added ? (
                <motion.span
                  key="check"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="flex items-center gap-1"
                >
                  <Check size={13} /> Added!
                </motion.span>
              ) : (
                <motion.span
                  key="add"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="flex items-center gap-1"
                >
                  <Plus size={13} /> Add
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductsGrid({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const filterCategories = ["All", "Fruits", "Vegetables", "Dairy", "Bakery", "Beverages", "Snacks"];

  const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <section className="py-16 px-4" style={{ background: "#fafafa" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold mb-2"
            style={{ color: "#F57C00", fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            Handpicked for you
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-black"
            style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a" }}
          >
            Featured Products
          </motion.h2>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {filterCategories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-colors"
              style={{
                background: activeCategory === cat ? "#2E7D32" : "white",
                color: activeCategory === cat ? "white" : "#374151",
                border: activeCategory === cat ? "none" : "1.5px solid #e5e7eb",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                boxShadow: activeCategory === cat ? "0 4px 14px rgba(46,125,50,0.28)" : "none",
              }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
          >
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All */}
        <div className="text-center mt-10">
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 12px 30px rgba(46,125,50,0.25)" }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-3.5 rounded-2xl font-bold text-white"
            style={{ background: "linear-gradient(135deg, #2E7D32, #388E3C)", fontFamily: "'Outfit', sans-serif" }}
          >
            View All Products
          </motion.button>
        </div>
      </div>
    </section>
  );
}
