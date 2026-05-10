import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, CheckCircle, Sparkles } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!email.includes("@")) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      className="py-20 px-4 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a2e0f 0%, #1B5E20 50%, #2E7D32 100%)" }}
    >
      {/* Background circles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: [80, 120, 200, 60, 160][i],
            height: [80, 120, 200, 60, 160][i],
            background: "rgba(255,255,255,0.04)",
            top: [`10%`, `60%`, `20%`, `70%`, `5%`][i],
            left: [`5%`, `10%`, `70%`, `80%`, `45%`][i],
          }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: [5, 7, 6, 4, 8][i], repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
          style={{ background: "rgba(245,124,0,0.2)", border: "1px solid rgba(245,124,0,0.3)" }}
        >
          <Mail size={30} color="#FB923C" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles size={14} color="#fb923c" />
            <span className="text-orange-300 text-sm font-semibold uppercase tracking-widest" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Newsletter
            </span>
            <Sparkles size={14} color="#fb923c" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Get Fresh Deals in Your Inbox
          </h2>
          <p className="text-white/60 mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Subscribe to receive exclusive offers, seasonal deals, and weekly fresh picks straight to your inbox.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(34,197,94,0.2)" }}>
                <CheckCircle size={36} color="#4ade80" />
              </div>
              <p className="text-white text-xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>You're on the list! 🎉</p>
              <p className="text-white/60 text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Check your inbox for a welcome gift — 15% off your next order.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-5 py-3.5 rounded-2xl text-sm outline-none"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1.5px solid rgba(255,255,255,0.2)",
                  color: "white",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  backdropFilter: "blur(8px)",
                }}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              />
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 12px 28px rgba(245,124,0,0.4)" }}
                whileTap={{ scale: 0.96 }}
                onClick={handleSubmit}
                className="px-6 py-3.5 rounded-2xl font-bold text-white flex items-center gap-2 text-sm whitespace-nowrap"
                style={{ background: "linear-gradient(135deg, #F57C00, #e65100)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                  />
                ) : (
                  <>Subscribe <ArrowRight size={15} /></>
                )}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {!submitted && (
          <p className="text-white/40 text-xs mt-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            No spam. Unsubscribe anytime. 💚
          </p>
        )}
      </div>
    </section>
  );
}
