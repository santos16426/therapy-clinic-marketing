import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Programs from "@/components/Programs";
import Place from "@/components/Place";
import Day from "@/components/Day";
import Voices from "@/components/Voices";
import Difference from "@/components/Difference";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <SmoothScroll>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Programs />
        <Place />
        <Day />
        <Voices />
        <Difference />
        <CTA />
      </main>
    </SmoothScroll>
  );
}
