export default function Marquee() {
  return (
    <div className="marquee" aria-hidden>
      <div className="track">
        {[0, 1].map((k) => (
          <div key={k} className="set">
            {Array.from({ length: 6 }, (_, i) => <span key={i}>Every child is a <em>star</em> <b>✶</b></span>)}
          </div>
        ))}
      </div>
    </div>
  );
}
