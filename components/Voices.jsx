"use client";
import { useRef } from "react";
import { motion } from "motion/react";
import { NOTES } from "@/lib/data";

export default function Voices() {
  const ref = useRef();
  return (
    <section id="voices" className="section voices">
      <span className="hand note">from the grown-ups</span>
      <h2>Words from parents</h2>
      <p className="hand hint">psst, you can drag these around</p>
      <div className="board" ref={ref}>
        {NOTES.map((n) => (
          <motion.figure key={n.n} className="sticky" drag dragConstraints={ref} dragElastic={0.15} initial={{ opacity: 0, y: 40, rotate: n.r }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileDrag={{ scale: 1.06, rotate: 0, zIndex: 9 }} whileHover={{ y: -4 }} style={{ background: n.c, left: n.x, top: n.y, rotate: n.r }}>
            <blockquote>“{n.t}”</blockquote>
            <figcaption className="hand">{n.n}</figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
