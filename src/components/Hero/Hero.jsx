import { useEffect, useRef, useState } from "react";
import Envelope from "../Envelope/Envelope";
import "./Hero.css";
export default function Hero() {
  const [stage, setStage] = useState("closed"); // closed -> opening -> open
  const timer = useRef(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  const open = () => {
    if (stage !== "closed") return;
    setStage("opening");
    timer.current = setTimeout(() => {
      timer.current = null;
      setStage("open");
      document
        .getElementById("welcome")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 1000);
  };
  return (
    <header className="hero">
      {stage !== "open" && (
        <div className="hero__stage">
          <Envelope stage={stage} onOpen={open} />
        </div>
      )}
    </header>
  );
}
