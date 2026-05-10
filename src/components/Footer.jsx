import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";
import { Leaf, MapPin, Phone, Mail } from "lucide-react";
const links = {
  Shop: [
    { label: "Fruits & Vegetables", id: "shop" },
    { label: "Dairy & Eggs",        id: "shop" },
    { label: "Bakery",              id: "shop" },
    { label: "Beverages",           id: "shop" },
    { label: "Snacks & Munchies",   id: "shop" },
  ],
  Company: [
    { label: "About Us",  id: "about"   },
    { label: "Careers",   id: "about"   },
    { label: "Blog",      id: "about"   },
    { label: "Press",     id: "about"   },
    { label: "Investors", id: "about"   },
  ],
  Support: [
    { label: "Help Center",  id: "contact" },
    { label: "Track Order",  id: "contact" },
    { label: "Returns",      id: "contact" },
    { label: "Contact Us",   id: "contact" },
    { label: "FAQs",         id: "contact" },
  ],
};

const socials = [
  { icon: FaInstagram, color: "#E1306C" },
  { icon: FaTwitter, color: "#1DA1F2" },
  { icon: FaFacebook, color: "#1877F2" },
  { icon: FaYoutube, color: "#FF0000" },
];

export default function Footer({ onNavigate }) {
  const scrollTo = (id) => onNavigate?.(id);
  return (
    <footer style={{ background: "#0f1a11" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4 cursor-pointer" onClick={() => scrollTo("home")}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #2E7D32, #66BB6A)" }}>
                <Leaf size={20} color="white" />
              </div>
              <span className="text-xl font-bold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Fresh<span style={{ color: "#4ade80" }}>Mart</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Your one-stop destination for fresh, organic, and high-quality groceries. Bringing the farm to your doorstep.
            </p>
            {/* Contact */}
            <div className="flex flex-col gap-2">
              {[
                { icon: MapPin, text: "123 Green Market St, Bengaluru 560001" },
                { icon: Phone, text: "+91 98765 43210" },
                { icon: Mail, text: "hello@freshmart.in" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={14} color="#4ade80" />
                  <span className="text-xs text-gray-400" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <p className="text-sm font-bold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>{title}</p>
              <ul className="flex flex-col gap-2.5">
                {items.map(({ label, id }) => (
                  <li key={label}>
                    <motion.button
                      onClick={() => scrollTo(id)}
                      whileHover={{ x: 4, color: "#4ade80" }}
                      className="text-sm text-gray-400 block bg-transparent border-0 cursor-pointer p-0 text-left"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "color 0.2s" }}
                    >
                      {label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px my-10" style={{ background: "rgba(255,255,255,0.07)" }} />

        {/* Bottom row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-gray-500" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            © 2025 FreshMart. All rights reserved. Made with 💚 in India.
          </p>
          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, color }, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <Icon size={15} color={color} />
              </motion.a>
            ))}
          </div>
          <p className="text-xs text-gray-500" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Privacy Policy · Terms of Use · Cookie Policy
          </p>
        </div>
      </div>
    </footer>
  );
}