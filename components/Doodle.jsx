const P = {
  book: "M8 14c10-4 18-2 24 4 6-6 14-8 24-4v34c-10-4-18-2-24 4-6-6-14-8-24-4zM32 18v34",
  speech: "M10 14h44v28H30l-12 10V42H10zM20 24h24M20 32h14",
  move: "M32 12a5 5 0 100 .1M32 22v18M16 26l16 4 16-4M32 40l-10 16M32 40l10 16",
  rainbow: "M8 50a24 24 0 0148 0M16 50a16 16 0 0132 0M24 50a8 8 0 0116 0",
  friends: "M22 18a6 6 0 100 .1M42 18a6 6 0 100 .1M10 48c0-14 24-14 24 0M30 48c0-14 24-14 24 0",
  kite: "M32 6l16 20-16 20-16-20zM32 6v40M16 26h32M32 46c-8 6 8 8 0 14",
  star: "M32 6l8 17 18 3-13 13 3 19-16-9-16 9 3-19L6 26l18-3z",
  sun: "M32 20a12 12 0 100 .1M32 4v8M32 52v8M4 32h8M52 32h8M12 12l6 6M46 46l6 6M12 52l6-6M46 18l6-6",
};
export default function Doodle({ n, size = 72, className = "", color = "currentColor" }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#rough)" aria-hidden>
      <path d={P[n]} />
    </svg>
  );
}
