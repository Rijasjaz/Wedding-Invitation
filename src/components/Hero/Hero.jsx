import { useRef, useState } from "react";
import Envelope from "../Envelope/Envelope";
import Petals from "../Petals/Petals";
import "./Hero.css";
export default function Hero() {
  const video = useRef(null);
  const [stage, setStage] = useState("closed"); // closed -> opening -> open
  const open = () => {
    video.current?.play().catch(() => {});
    setStage("opening");
    setTimeout(() => setStage("open"), 1000);
  };
  return (
    <header className="hero">
      <video ref={video} className="hero__video" autoPlay muted loop playsInline preload="auto">
        <source src="/assets/background.mp4" type="video/mp4" />
      </video>
      <div className="hero__overlay" />
      <Petals active={stage === "open"} />
      <div className="hero__stage"><Envelope stage={stage} onOpen={open} /></div>
      <a href="#welcome" className={`hero__hint ${stage === "open" ? "is-shown" : ""}`}>
        <span aria-hidden="true">↓</span>Invitation
      </a>
    </header>
  );
}
