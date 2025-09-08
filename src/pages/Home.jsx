import React from "react";
import { motion } from "framer-motion";
import FloatingSphere from "../components/FloatingSphere"; // correct path

export default function Home() {
  return (
    <div className="page">
      <header className="hero">
        {/* Hero Left */}
        <div className="hero-left">
          <motion.h1
            className="title"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Innovative <span className="accent">Paper Equipments</span>
          </motion.h1>

          <motion.p
            className="subtitle"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            High-quality pulp & paper machinery with modern design, built for efficiency.
          </motion.p>

          <div className="cta">
            <button className="btn">See Products</button>
            <button className="btn ghost">Contact Us</button>
          </div>
        </div>

        {/* Hero Right */}
        <div className="hero-right">
          {/* Existing Floating Cards (optional, can keep or remove if using 3D sphere) */}
          <div className="card card-1">Cutting</div>
          <div className="card card-2">Processing</div>
          <div className="card card-3">Finishing</div>

          {/* New Floating Sphere */}
          <FloatingSphere />
        </div>
      </header>

      {/* Features Grid */}
      <section className="grid">
        <article className="feature">
          <h3>Quality</h3>
          <p>Engineered with durability for long-term operations.</p>
        </article>
        <article className="feature">
          <h3>Innovation</h3>
          <p>Smart designs inspired by the latest industry needs.</p>
        </article>
        <article className="feature">
          <h3>Support</h3>
          <p>We provide continuous service & maintenance assistance.</p>
        </article>
      </section>
    </div>
  );
}
