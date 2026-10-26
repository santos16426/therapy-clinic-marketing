import { Fraunces, Caveat, DM_Sans } from "next/font/google";
import "./globals.css";
const display = Fraunces({ subsets: ["latin"], variable: "--font-display", style: ["normal", "italic"] });
const hand = Caveat({ subsets: ["latin"], variable: "--font-hand" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
export const metadata = {
  title: "Sunshine Learning Hub — Help Your Child Shine",
  description: "Play, therapy and learning for every unique little star. Ages 2–10, Angeles City.",
  icons: {
    icon: "/logo.svg",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${hand.variable} ${body.variable}`}>
      <body>
        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
          <filter id="rough"><feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="2" seed="4" /><feDisplacementMap in="SourceGraphic" scale="3" /></filter>
        </svg>
        {children}
      </body>
    </html>
  );
}
