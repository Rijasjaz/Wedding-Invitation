import { useEffect, useRef, useState } from "react";
import { wedding } from "./data/weddingData";
import Envelope from "./components/Envelope/Envelope";
import FloatingNav from "./components/FloatingNav/FloatingNav";
import Welcome from "./components/Welcome/Welcome";
import Countdown from "./components/Countdown/Countdown";
import Ceremony from "./components/Ceremony/Ceremony";
import Location from "./components/Location/Location";
import Ending from "./components/Ending/Ending";

export default function App() {
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
    <>
      <FloatingNav links={wedding.nav} />
      <main>
        <Welcome data={wedding} />
        <Countdown target={wedding.date} />
        <Ceremony data={wedding} />
        <Location venue={wedding.venue} />
        <Ending data={wedding} />
      </main>
      {stage !== "open" && <Envelope stage={stage} onOpen={open} />}
    </>
  );
}
