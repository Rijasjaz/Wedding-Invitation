import { useEffect, useState } from "react";
import "./Petals.css";
export default function Petals({ active, count = 15 }) {
  const [petals, setPetals] = useState([]);
  useEffect(() => {
    if (!active) return;
    const timers = Array.from({ length: count }, (_, i) =>
      setTimeout(() => {
        const id = `${Date.now()}-${i}`;
        setPetals((p) => [...p, {
          id, src: `/assets/petals/petal${1 + Math.floor(Math.random() * 5)}.png`,
          left: Math.random() * 100, size: 18 + Math.random() * 22, dur: 4 + Math.random() * 3,
          sway: (Math.random() - 0.5) * 60, spin: 180 + Math.random() * 360,
        }]);
        setTimeout(() => setPetals((p) => p.filter((x) => x.id !== id)), 7000);
      }, i * 180)
    );
    return () => timers.forEach(clearTimeout);
  }, [active, count]);
  return (
    <div className="petals" aria-hidden="true">
      {petals.map((p) => (
        <img key={p.id} src={p.src} alt="" className="petal"
          style={{ left: `${p.left}%`, width: p.size, animationDuration: `${p.dur}s`, "--sway": `${p.sway}px`, "--spin": `${p.spin}deg` }} />
      ))}
    </div>
  );
}
