"use client";
import { motion, useScroll, useSpring } from "motion/react";
import { PHONE } from "@/lib/data";
import Image from "next/image";
export default function Nav() {
  const { scrollYProgress } = useScroll();
  const w = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return (
    <motion.header className="nav" initial={{ y: -80 }} animate={{ y: 0 }} transition={{ type: "spring", delay: 0.3 }}>
      <a href="#top" className="logo"><Image src="/logo.svg" alt="Sunshine" width={30} height={30} /> Sunshine</a>
      <nav>
        <a href="#services">Programs</a>
        <a href="#about">Our hub</a>
        <a href="#voices">Parents</a>
        <a href={`tel:${PHONE}`} className="btn btn-sm">Call {PHONE}</a>
      </nav>
      <motion.i className="progress" style={{ scaleX: w }} />
    </motion.header>
  );
}
