"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Magnetic } from "./Magnetic";
import { PHONE, ADDRESS, MAP } from "@/lib/data";

export default function CTA() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section id="contact" className="cta">
        <span className="hand note">come say hi</span>
        <motion.h2 initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>Ready to play <em>&amp;</em> learn?</motion.h2>
        <p>Give us a call and we'll set up a visit. Bring your little one, we'll bring the snacks.</p>
        <Magnetic strength={0.4}><a href={`tel:${PHONE}`} className="phone">{PHONE}</a></Magnetic>
        <div className="visit">
          <h3>Visit our hub</h3>
          <p><b>Sunshine Learning Hub</b><br />{ADDRESS}</p>
          <a href={MAP} target="_blank" rel="noreferrer" className="btn btn-sm">Open in Google Maps ↗</a>
        </div>
        <footer>© 2026 Sunshine Learning Hub</footer>
      </section>
      <div className="help">
        <AnimatePresence>
          {open && (
            <motion.div className="bubble-msg" initial={{ opacity: 0, y: 20, scale: 0.85 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.85 }}>
              Hi there! Questions about a program? <a href={`tel:${PHONE}`}>Call {PHONE}</a>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }} onClick={() => setOpen(!open)}>Ask Sunshine</motion.button>
      </div>
    </>
  );
}
