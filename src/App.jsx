import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductsGrid from "./components/ProductsGrid";
import DealsOfDay from "./components/DealsOfDay";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import ScrollProgressBar from "./components/ScrollProgressBar";

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev.map((item) => item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item)
        .filter((item) => item.qty > 0)
    );
  };

  const deleteFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <ScrollProgressBar />
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} onNavigate={scrollTo} />

      <section id="home">
        <Hero onShopClick={() => scrollTo("shop")} />
      </section>

      <section id="shop">
        <Categories />
        <ProductsGrid onAddToCart={addToCart} />
      </section>

      <section id="deals">
        <DealsOfDay onAddToCart={addToCart} />
      </section>

      <section id="about">
        <WhyUs />
        <Testimonials />
      </section>

      <section id="contact">
        <Newsletter />
      </section>

      <Footer onNavigate={scrollTo} />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onAdd={addToCart}
        onRemove={removeFromCart}
        onDelete={deleteFromCart}
      />
    </div>
  );
}