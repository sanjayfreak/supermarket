import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -100,
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f8faf5 0%, #eef7e8 100%)",
      }}
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: "#4ade80",
        }}
      />

      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="flex items-center gap-4"
        >
          <motion.div
            animate={{
              rotate: [0, -10, 10, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, #2E7D32, #4ade80)",
            }}
          >
            <Leaf size={34} color="white" />
          </motion.div>

          <div>
            <h1
              className="text-5xl font-black"
              style={{
                fontFamily: "'Outfit', sans-serif",
                color: "#111827",
              }}
            >
              Fresh<span style={{ color: "#2E7D32" }}>Mart</span>
            </h1>

            <p
              className="text-sm mt-1 tracking-wide"
              style={{
                color: "#6b7280",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Fresh groceries delivered fast
            </p>
          </div>
        </motion.div>

        {/* Loading Bar */}
        <div className="w-72 h-2 bg-green-100 rounded-full overflow-hidden mt-10">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
            }}
            className="h-full rounded-full"
            style={{
              background:
                "linear-gradient(90deg, #2E7D32, #4ade80)",
            }}
          />
        </div>

        {/* Loading Text */}
        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="mt-4 text-sm"
          style={{
            color: "#6b7280",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Loading freshness...
        </motion.p>
      </div>
    </motion.div>
  );
}