import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

import Home from "../src/pages/Home";           
import Products from "../src/pages/Products";
import ProductDetail from "../src/pages/ProductDetail";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Home Route */}
        <Route path="/" element={<Home />} />     {/* ✅ Home route */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
