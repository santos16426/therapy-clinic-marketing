"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Polaroid = ({ cap, cls, speed, bg }) => (
  <figure className={`polaroid ${cls}`} data-speed={speed}>
    {/* Swap .photo for <Image src="/your-photo.jpg" fill alt="" /> */}
    <div className="photo" style={{ background: bg }}><small>your photo here</small></div>
    <figcaption className="hand">{cap}</figcaption>
  </figure>
);

export default function Place() {
  const root = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".polaroid").forEach((el) =>
        gsap.to(el, { yPercent: -parseFloat(el.dataset.speed) * 22, ease: "none", scrollTrigger: { trigger: root.current, scrub: true } }));
      gsap.utils.toArray(".count").forEach((el) => {
        const o = { v: 0 };
        gsap.to(o, { v: +el.dataset.to, duration: 2, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 92%" }, onUpdate: () => (el.textContent = Math.round(o.v) + el.dataset.suffix) });
      });
      gsap.from(".place-copy > *", { y: 50, opacity: 0, stagger: 0.12, scrollTrigger: { trigger: ".place-copy", start: "top 80%" } });
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <section id="about" ref={root} className="section place">
      <div className="place-copy">
        <span className="hand note">our little corner of Angeles</span>
        <h2>A safe place to grow</h2>
        <p>Our hub is meant to feel like a second home. Bright colors, soft corners and patient, expert care, so your child walks in curious and leaves proud.</p>
        <div className="stats">
          <div><b className="count" data-to="500" data-suffix="+">0</b><span className="hand">happy kids</span></div>
          <div><b className="count" data-to="15" data-suffix="+">0</b><span className="hand">specialists</span></div>
          <div><b className="count" data-to="6" data-suffix="">0</b><span className="hand">programs</span></div>
        </div>
      </div>
      <div className="collage">
        <Polaroid cap="story time, Tuesdays" cls="a" speed={0.5} bg="linear-gradient(135deg,#F4B63E,#E0654A)" />
        <Polaroid cap="paint everywhere" cls="b" speed={1.2} bg="linear-gradient(135deg,#6FA3C7,#B796C0)" />
        <Polaroid cap="a small big win" cls="c" speed={0.8} bg="linear-gradient(135deg,#8DB580,#6FA3C7)" />
      </div>
    </section>
  );
}
