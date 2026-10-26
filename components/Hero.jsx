"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Magnetic } from "./Magnetic";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function Hero() {
  const root = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".ch", {
        yPercent: 110,
        rotate: 6,
        opacity: 0,
        stagger: 0.04,
        duration: 1,
        ease: "power4.out",
        delay: 0.3,
      });
      gsap.fromTo(
        ".scribble path",
        { strokeDashoffset: 1 },
        {
          strokeDashoffset: 0,
          duration: 1.1,
          delay: 1.3,
          ease: "power2.inOut",
        },
      );
      gsap.from(".hero-fade", {
        y: 24,
        opacity: 0,
        stagger: 0.14,
        duration: 0.9,
        delay: 0.9,
        ease: "power3.out",
      });
      gsap.to(".hero-3d", {
        yPercent: 14,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);
  const line = (t, cls = "") => (
    <span className={`line ${cls}`}>
      {t.split("").map((c, i) => (
        <span key={i} className="ch">
          {c === " " ? "\u00A0" : c}
        </span>
      ))}
    </span>
  );
  return (
    <section id="top" ref={root} className="hero">
      <div className="hero-3d">
        <Hero3D />
      </div>
      <div className="hero-copy">
        <span className="hand note hero-fade">Angeles City · ages 2 to 10</span>
        <h1>
          {line("Help your")}
          {line("child")}
          <span className="shine">
            {line("shine.", "it")}
            <svg
              className="scribble"
              viewBox="0 0 340 20"
              preserveAspectRatio="none"
            >
              <path
                pathLength="1"
                strokeDasharray="1"
                d="M4 12C60 3 120 18 200 8s90 5 134 2"
              />
            </svg>
          </span>
        </h1>
        <p className="hero-fade">
          Play, therapy and learning for every unique little star, led by people
          who actually sit on the floor with your child.
        </p>
        <div className="hero-fade row">
          <Magnetic>
            <a href="#services" className="btn">
              Meet our programs
            </a>
          </Magnetic>
          <span className="hand aside">or just say hi ↴</span>
        </div>
      </div>
    </section>
  );
}
