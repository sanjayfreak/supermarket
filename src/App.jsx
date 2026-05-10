import { useState, useEffect } from "react";

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
import Loader from "./components/Loader";

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // Loader state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Show loader first
  if (loading) {
    return <Loader />;
  }

  // Add to cart
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Remove one quantity
  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // Delete product fully
  const deleteFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Total cart count
  const cartCount = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  // Smooth section navigation
  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: "#fafaf5",
        overflowX: "hidden",
      }}
    >
      {/* Scroll Progress */}
      <ScrollProgressBar />

      {/* Navbar */}
      <Navbar
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
        onNavigate={scrollTo}
      />

      {/* Hero */}
      <section id="home">
        <Hero onShopClick={() => scrollTo("shop")} />
      </section>

      {/* Shop */}
      <section id="shop">
        <Categories />

        <ProductsGrid
          onAddToCart={addToCart}
        />
      </section>

      {/* Deals */}
      <section id="deals">
        <DealsOfDay
          onAddToCart={addToCart}
        />
      </section>

      {/* About */}
      <section id="about">
        <WhyUs />

        <Testimonials />
      </section>

      {/* Contact */}
      <section id="contact">
        <Newsletter />
      </section>

      {/* Footer */}
      <Footer onNavigate={scrollTo} />

      {/* Cart Drawer */}
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