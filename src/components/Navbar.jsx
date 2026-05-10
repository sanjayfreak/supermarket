import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ShoppingCart, Search, Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { label: "Home",    id: "home"    },
  { label: "Shop",    id: "shop"    },
  { label: "Deals",   id: "deals"   },
  { label: "About",   id: "about"   },
  { label: "Contact", id: "contact" },
];

export default function Navbar({ cartCount, onCartOpen, onNavigate }) {
  const [hidden, setHidden]         = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId]     = useState("home");
  const [prevScroll, setPrevScroll] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
    if (latest > prevScroll && latest > 100) setHidden(true);
    else setHidden(false);
    setPrevScroll(latest);
  });

  useEffect(() => {
    const observers = [];
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNav = (id) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? "rgba(255,255,255,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "none",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.06)" : "none",
          transition: "background 0.3s, box-shadow 0.3s",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <motion.div
              className="flex items-center gap-2 cursor-pointer select-none"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleNav("home")}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #2E7D32, #66BB6A)" }}>
                <Leaf size={20} color="white" />
              </div>
              <span className="text-xl font-bold tracking-tight"
                style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a" }}>
                Fresh<span style={{ color: "#2E7D32" }}>Mart</span>
              </span>
            </motion.div>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map(({ label, id }) => {
                const active = activeId === id;
                return (
                  <motion.button
                    key={id}
                    onClick={() => handleNav(id)}
                    className="relative text-sm bg-transparent border-0 cursor-pointer outline-none"
                    style={{
                      color: active ? "#2E7D32" : "#374151",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: active ? 700 : 500,
                      padding: 0,
                    }}
                    whileHover={{ color: "#2E7D32" }}
                  >
                    {label}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 rounded-full"
                      style={{ background: "#2E7D32" }}
                      initial={false}
                      animate={{ width: active ? "100%" : "0%" }}
                      transition={{ duration: 0.25 }}
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-3">

              {/* Search */}
              <motion.div className="relative hidden sm:flex items-center">
                <AnimatePresence>
                  {searchOpen && (
                    <motion.input
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 200, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      type="text"
                      placeholder="Search products…"
                      autoFocus
                      className="pl-4 pr-4 py-2 rounded-full text-sm outline-none"
                      style={{
                        background: "rgba(46,125,50,0.08)",
                        border: "1.5px solid rgba(46,125,50,0.25)",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        color: "#1a1a1a",
                      }}
                    />
                  )}
                </AnimatePresence>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="ml-2 w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: searchOpen ? "rgba(46,125,50,0.12)" : "transparent" }}
                >
                  {searchOpen ? <X size={18} color="#2E7D32" /> : <Search size={18} color="#374151" />}
                </motion.button>
              </motion.div>

              {/* Cart */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.93 }}
                onClick={onCartOpen}
                className="relative w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "rgba(46,125,50,0.08)" }}
              >
                <ShoppingCart size={20} color="#2E7D32" />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span
                      key={cartCount}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 20 }}
                      className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: "#F57C00", fontFamily: "'Outfit', sans-serif" }}
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Mobile toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.93 }}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "rgba(46,125,50,0.08)" }}
              >
                {mobileOpen ? <X size={20} color="#2E7D32" /> : <Menu size={20} color="#374151" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 lg:hidden"
            style={{
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
              padding: "0.75rem",
            }}
          >
            {navLinks.map(({ label, id }, i) => {
              const active = activeId === id;
              return (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNav(id)}
                  className="w-full text-left py-3 px-4 rounded-xl text-sm flex items-center justify-between"
                  style={{
                    color: active ? "#2E7D32" : "#374151",
                    fontWeight: active ? 700 : 500,
                    background: active ? "rgba(46,125,50,0.07)" : "transparent",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {label}
                  {active && <span className="w-2 h-2 rounded-full" style={{ background: "#2E7D32" }} />}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}