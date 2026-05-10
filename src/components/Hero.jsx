import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Truck, Star } from "lucide-react";

const floatingVariants = {
  animate: {
    y: [0, -14, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero({ onShopClick }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #fefce8 50%, #fff7ed 100%)" }}>
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.08, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #86efac, #4ade80)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, -4, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #fdba74, #fb923c)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #a3e635, #65a30d)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "rgba(46,125,50,0.1)", border: "1px solid rgba(46,125,50,0.2)" }}>
              <Sparkles size={14} color="#2E7D32" />
              <span className="text-sm font-semibold" style={{ color: "#2E7D32", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                🌿 100% Organic & Fresh
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6"
              style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a", letterSpacing: "-0.02em" }}
            >
              Farm Fresh,
              <br />
              <span style={{ color: "#2E7D32" }}>Delivered</span>
              <br />
              <span style={{ color: "#F57C00" }}>Fast ⚡</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-500 mb-8 max-w-md leading-relaxed"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Shop 5,000+ fresh groceries, artisan foods, and organic produce — all delivered to your door in under 60 minutes.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 12px 30px rgba(46,125,50,0.35)" }}
                whileTap={{ scale: 0.97 }}
                onClick={onShopClick}
                className="flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-bold text-base"
                style={{ background: "linear-gradient(135deg, #2E7D32, #388E3C)", fontFamily: "'Outfit', sans-serif", boxShadow: "0 8px 24px rgba(46,125,50,0.25)" }}
              >
                Shop Now
                <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowRight size={18} />
                </motion.div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-base"
                style={{
                  background: "white",
                  border: "2px solid rgba(46,125,50,0.2)",
                  color: "#2E7D32",
                  fontFamily: "'Outfit', sans-serif",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                }}
              >
                View Deals 🔥
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-8">
              {[
                { value: "50K+", label: "Happy Customers" },
                { value: "5K+", label: "Products" },
                { value: "60min", label: "Fast Delivery" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-black" style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a" }}>{stat.value}</p>
                  <p className="text-sm text-gray-500" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Image collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex justify-center items-center"
          >
            {/* Main image */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
              style={{ width: 340, height: 420 }}
            >
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=700&h=840&fit=crop"
                alt="Fresh groceries"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.15), transparent)" }} />
            </motion.div>

            {/* Floating card 1 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -right-4 top-12 rounded-2xl p-3 shadow-xl flex items-center gap-3"
              style={{ background: "white", minWidth: 160 }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: "#f0fdf4" }}>🍎</div>
              <div>
                <p className="text-xs font-bold" style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a" }}>Fresh Fruits</p>
                <p className="text-xs text-gray-400" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>200+ varieties</p>
              </div>
            </motion.div>

            {/* Floating card 2 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -left-6 bottom-20 rounded-2xl p-3 shadow-xl flex items-center gap-3"
              style={{ background: "white", minWidth: 170 }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#fff7ed" }}>
                <Truck size={20} color="#F57C00" />
              </div>
              <div>
                <p className="text-xs font-bold" style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a" }}>Free Delivery</p>
                <p className="text-xs text-gray-400" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Orders above ₹499</p>
              </div>
            </motion.div>

            {/* Rating card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -right-2 bottom-16 rounded-2xl p-3 shadow-xl"
              style={{ background: "white" }}
            >
              <div className="flex items-center gap-1.5">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#F57C00" color="#F57C00" />)}
              </div>
              <p className="text-xs font-bold mt-1" style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a" }}>4.9/5 Rating</p>
              <p className="text-xs text-gray-400" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>12K+ reviews</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Offer banner */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 py-3 flex items-center justify-center gap-6 flex-wrap px-4"
        style={{ background: "linear-gradient(90deg, #2E7D32, #388E3C, #F57C00)", boxShadow: "0 -4px 20px rgba(0,0,0,0.08)" }}
      >
        {["🚚 Free delivery on first order!", "🌿 100% Organic Certified", "⚡ 60-min express delivery", "🎁 Use code FRESH20 for 20% off"].map((text, i) => (
          <motion.span
            key={text}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            className="text-white text-sm font-semibold"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {text}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
