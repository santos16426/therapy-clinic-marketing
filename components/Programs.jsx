"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CATS, PROGRAMS } from "@/lib/data";
import Doodle from "./Doodle";

function Card({ p, i }) {
  const [flip, setFlip] = useState(false);
  const tilt = [-1.6, 1.2, -0.8, 1.8, -1.2, 0.9][i % 6];
  return (
    <motion.div layout initial={{ opacity: 0, scale: 0.85, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0, rotate: tilt }} exit={{ opacity: 0, scale: 0.85 }} transition={{ type: "spring", stiffness: 220, damping: 22 }} className="card-wrap" whileHover={{ y: -10, rotate: 0 }}>
      <motion.div className="card" animate={{ rotateY: flip ? 180 : 0 }} transition={{ type: "spring", stiffness: 150, damping: 18 }} onClick={() => setFlip(!flip)}>
        <div className="face front" style={{ background: p.color }}>
          <span className="stamp">{p.age}</span>
          <Doodle n={p.icon} size={96} className="ico" />
          <h3>{p.title}</h3>
          <p className="hand">{p.tag}</p>
          <small className="hand">tap to flip ↻</small>
        </div>
        <div className="face back">
          <h4 className="hand">Goal &amp; approach</h4>
          <p>{p.goal}</p>
          <div className="chips">{p.chips.map((c) => <span key={c}>{c}</span>)}</div>
          <a href="#contact" className="btn btn-sm" onClick={(e) => e.stopPropagation()}>Inquire now</a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Programs() {
  const [cat, setCat] = useState("All");
  const list = PROGRAMS.filter((p) => cat === "All" || p.cat === cat);
  return (
    <section id="services" className="section programs">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="head">
        <span className="hand note">designed for ages 2 to 10</span>
        <h2>Our programs</h2>
        <div className="tabs">
          {CATS.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={cat === c ? "on" : ""}>
              {cat === c && <motion.i layoutId="tab" className="bubble" />}
              <span>{c}</span>
            </button>
          ))}
        </div>
      </motion.div>
      <motion.div layout className="grid">
        <AnimatePresence mode="popLayout">{list.map((p, i) => <Card key={p.id} p={p} i={i} />)}</AnimatePresence>
      </motion.div>
    </section>
  );
}
