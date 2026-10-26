"use client";
import { motion } from "motion/react";
import { WHY } from "@/lib/data";

export default function Difference() {
  return (
    <section className="section why">
      <span className="hand note">why families stay</span>
      <h2>The Sunshine difference</h2>
      <ol>
        {WHY.map(([t, d], i) => (
          <motion.li key={t} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.08 }} whileHover={{ x: 14 }}>
            <span className="hand num">0{i + 1}</span>
            <h3>{t}</h3>
            <p>{d}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
