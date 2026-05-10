export const categories = [
  { id: 1, name: "Fruits", emoji: "🍎", color: "#FF6B6B", bg: "#FFF0F0" },
  { id: 2, name: "Vegetables", emoji: "🥦", color: "#2E7D32", bg: "#F0FFF4" },
  { id: 3, name: "Dairy", emoji: "🥛", color: "#1565C0", bg: "#EFF6FF" },
  { id: 4, name: "Bakery", emoji: "🍞", color: "#F57C00", bg: "#FFF8F0" },
  { id: 5, name: "Beverages", emoji: "🧃", color: "#7B1FA2", bg: "#FAF0FF" },
  { id: 6, name: "Snacks", emoji: "🍿", color: "#C62828", bg: "#FFF5F5" },
  { id: 7, name: "Meat", emoji: "🥩", color: "#AD1457", bg: "#FFF0F5" },
  { id: 8, name: "Frozen", emoji: "🧊", color: "#00838F", bg: "#F0FFFF" },
];

export const products = [
  { id: 1, name: "Organic Alphonso Mangoes", category: "Fruits", price: 299, originalPrice: 399, image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=300&fit=crop", rating: 4.8, reviews: 124, badge: "Organic" },
  
  { id: 3, name: "Farm Fresh Whole Milk", category: "Dairy", price: 68, originalPrice: 80, image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop", rating: 4.9, reviews: 203, badge: "Best Seller" },
  { id: 4, name: "Sourdough Artisan Bread", category: "Bakery", price: 175, originalPrice: 220, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop", rating: 4.7, reviews: 67, badge: "Fresh Baked" },
  { id: 5, name: "Cold Pressed Orange Juice", category: "Beverages", price: 149, originalPrice: 180, image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop", rating: 4.5, reviews: 156, badge: "Cold Press" },
  
  { id: 7, name: "Free Range Eggs (12)", category: "Dairy", price: 120, originalPrice: null, image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=400&h=300&fit=crop", rating: 4.9, reviews: 312, badge: "Free Range" },
  { id: 8, name: "Ripe Avocados (Pack of 3)", category: "Fruits", price: 220, originalPrice: 270, image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=300&fit=crop", rating: 4.4, reviews: 76, badge: null },

  { id: 10, name: "Greek Yogurt (400g)", category: "Dairy", price: 145, originalPrice: 160, image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop", rating: 4.6, reviews: 88, badge: null },
  { id: 11, name: "Whole Wheat Croissants", category: "Bakery", price: 199, originalPrice: 249, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop", rating: 4.5, reviews: 45, badge: "New" },
  { id: 12, name: "Coconut Water (Pack of 6)", category: "Beverages", price: 260, originalPrice: 320, image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=300&fit=crop", rating: 4.8, reviews: 189, badge: "Hydrating" },

  {
    id: 2,
    name: "Fresh Broccoli Crown",
    category: "Vegetables",
    price: 89,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=400&q=80",
    rating: 4.6,
    reviews: 89,
    badge: "Fresh",
  },
{
  id: 6,
  name: "Cherry Tomatoes (500g)",
  category: "Vegetables",
  price: 79,
  originalPrice: 95,
  image:
    "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80",
  rating: 4.7,
  reviews: 134,
  badge: "Seasonal",
},

  {
    id: 9,
    name: "Mixed Dry Fruits Pack",
    category: "Snacks",
    price: 399,
    originalPrice: 499,
    image:
      "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    reviews: 98,
    badge: "Premium",
  },
];

export default products;


export const deals = [
  { id: 1, name: "Premium Strawberries 500g", originalPrice: 249, dealPrice: 149, image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&h=400&fit=crop", discount: 40 },
  { id: 2, name: "Organic Spinach Bundle", originalPrice: 120, dealPrice: 69, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&h=400&fit=crop", discount: 43 },
  { id: 3, name: "Gala Apple Pack (1kg)", originalPrice: 199, dealPrice: 129, image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=500&h=400&fit=crop", discount: 35 },
];

export const testimonials = [
  { id: 1, name: "Priya Sharma", role: "Home Chef", avatar: "PS", text: "FreshMart has completely changed how I shop. The produce is always farm-fresh and the delivery is lightning fast. I won't go back to a regular store!", rating: 5 },
  { id: 2, name: "Rahul Mehta", role: "Fitness Enthusiast", avatar: "RM", text: "The organic section is incredible. I get all my weekly fruits and veggies delivered in perfect condition. Quality is 10/10 every single time.", rating: 5 },
  { id: 3, name: "Ananya Krishnan", role: "Working Mom", avatar: "AK", text: "As a busy mom, FreshMart saves me hours every week. The deals are genuine and the app experience is so smooth. Highly recommend to everyone!", rating: 5 },
];
