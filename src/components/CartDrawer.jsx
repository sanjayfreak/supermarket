import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Plus, Minus, Trash2, ArrowRight } from "lucide-react";

export default function CartDrawer({ isOpen, onClose, cart, onAdd, onRemove, onDelete }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50"
            style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(3px)" }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 z-50 flex flex-col"
            style={{ width: "min(100vw, 420px)", background: "white", boxShadow: "-8px 0 40px rgba(0,0,0,0.12)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: "1px solid #f3f4f6" }}>
              <div className="flex items-center gap-3">
                <ShoppingCart size={22} color="#2E7D32" />
                <div>
                  <h3 className="font-black text-base" style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a" }}>Your Cart</h3>
                  <p className="text-xs text-gray-400" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{totalItems} items</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "#f3f4f6" }}
              >
                <X size={18} color="#374151" />
              </motion.button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
              <AnimatePresence>
                {cart.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full gap-4 py-20"
                  >
                    <div className="text-6xl">🛒</div>
                    <p className="font-bold text-lg" style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a" }}>Your cart is empty</p>
                    <p className="text-sm text-gray-400 text-center" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Add some fresh items to get started!
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-xl text-sm font-bold text-white mt-2"
                      style={{ background: "linear-gradient(135deg, #2E7D32, #388E3C)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      Shop Now
                    </motion.button>
                  </motion.div>
                ) : (
                  cart.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-4 rounded-2xl p-3"
                      style={{ background: "#fafafa", border: "1px solid #f3f4f6" }}
                    >
                      <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#1a1a1a" }}>
                          {item.name}
                        </p>
                        <p className="text-sm font-black mt-0.5" style={{ fontFamily: "'Outfit', sans-serif", color: "#2E7D32" }}>
                          ₹{item.price}
                        </p>
                        {/* Qty controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <motion.button whileTap={{ scale: 0.85 }} onClick={() => onRemove(item.id)}
                            className="w-6 h-6 rounded-full flex items-center justify-center"
                            style={{ background: "#f3f4f6" }}>
                            <Minus size={12} color="#374151" />
                          </motion.button>
                          <motion.span
                            key={item.qty}
                            initial={{ scale: 1.3 }}
                            animate={{ scale: 1 }}
                            className="text-sm font-bold w-5 text-center"
                            style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a" }}
                          >
                            {item.qty}
                          </motion.span>
                          <motion.button whileTap={{ scale: 0.85 }} onClick={() => onAdd(item)}
                            className="w-6 h-6 rounded-full flex items-center justify-center"
                            style={{ background: "#2E7D32" }}>
                            <Plus size={12} color="white" />
                          </motion.button>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-3">
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.85 }} onClick={() => onDelete(item.id)}>
                          <Trash2 size={15} color="#ef4444" />
                        </motion.button>
                        <p className="text-sm font-black" style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a" }}>
                          ₹{item.price * item.qty}
                        </p>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="px-6 py-5" style={{ borderTop: "1px solid #f3f4f6" }}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-500" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Subtotal</span>
                  <span className="font-bold" style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a" }}>₹{total}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-sm text-gray-500" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Delivery</span>
                  <span className="text-sm font-bold text-green-600" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {total >= 499 ? "FREE 🎉" : `₹${49}`}
                  </span>
                </div>
                <div className="h-px bg-gray-100 mb-4" />
                <div className="flex justify-between mb-5">
                  <span className="font-bold" style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a" }}>Total</span>
                  <span className="text-xl font-black" style={{ fontFamily: "'Outfit', sans-serif", color: "#2E7D32" }}>
                    ₹{total + (total >= 499 ? 0 : 49)}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 12px 28px rgba(46,125,50,0.35)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-2xl text-white font-bold flex items-center justify-center gap-2"
                  style={{ background: "linear-gradient(135deg, #2E7D32, #388E3C)", fontFamily: "'Outfit', sans-serif" }}
                >
                  Proceed to Checkout <ArrowRight size={18} />
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
