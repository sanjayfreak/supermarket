import { motion } from "framer-motion";
import { Truck, Leaf, RefreshCw, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Delivery",
    desc: "Get free delivery on all orders above ₹499. Express 60-minute delivery available in select areas.",
    color: "#2E7D32",
    bg: "#f0fdf4",
  },
  {
    icon: Leaf,
    title: "Fresh Daily",
    desc: "Our produce is sourced directly from local farms every morning, ensuring peak freshness and quality.",
    color: "#F57C00",
    bg: "#fff7ed",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    desc: "Not satisfied? Return any product within 24 hours for a full refund — no questions asked.",
    color: "#7C3AED",
    bg: "#faf5ff",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Our customer care team is available around the clock to help you with any questions.",
    color: "#0891B2",
    bg: "#ecfeff",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhyUs() {
  return (
    <section className="py-20 px-4" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold mb-2 uppercase tracking-widest"
            style={{ color: "#F57C00", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Why FreshMart?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-black"
            style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a" }}
          >
            We Make Grocery Shopping
            <br />
            <span style={{ color: "#2E7D32" }}>Better for Everyone</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: `0 20px 50px ${f.color}22` }}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ background: f.bg, border: `1.5px solid ${f.color}18` }}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: `${f.color}18` }}
              >
                <f.icon size={28} color={f.color} />
              </motion.div>

              <div>
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a" }}>
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 rounded-3xl p-8 flex flex-wrap items-center justify-between gap-6"
          style={{ background: "linear-gradient(135deg, #2E7D32, #388E3C)", overflow: "hidden", position: "relative" }}
        >
          {/* Deco circles */}
          <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full opacity-10 bg-white" />
          <div className="absolute right-20 -bottom-8 w-32 h-32 rounded-full opacity-10 bg-white" />

          <div className="relative z-10">
            <h3 className="text-2xl font-black text-white mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
              First Order? Get 20% Off! 🎉
            </h3>
            <p className="text-white/80 text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Use code <strong>FRESH20</strong> at checkout. Valid on orders above ₹299.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.06, boxShadow: "0 12px 30px rgba(0,0,0,0.25)" }}
            whileTap={{ scale: 0.97 }}
            className="relative z-10 px-8 py-3.5 rounded-2xl font-bold text-base"
            style={{ background: "white", color: "#2E7D32", fontFamily: "'Outfit', sans-serif" }}
          >
            Claim Offer →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
