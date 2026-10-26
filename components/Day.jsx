"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DAY } from "@/lib/data";

export default function Day() {
  const root = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(".spine i", { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: ".day-list", start: "top 70%", end: "bottom 70%", scrub: true } });
      gsap.utils.toArray(".day-item").forEach((el) =>
        gsap.from(el, { x: -40, opacity: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 80%" } }));
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={root} className="section day">
      <span className="hand note">a peek inside</span>
      <h2>A day at Sunshine</h2>
      <div className="day-list">
        <div className="spine"><i /></div>
        {DAY.map(([t, h, d]) => (
          <div key={t} className="day-item">
            <span className="hand time">{t}</span>
            <div><h3>{h}</h3><p>{d}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
