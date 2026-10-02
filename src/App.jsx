import { wedding } from "./data/weddingData";
import Hero from "./components/Hero/Hero";
import FloatingNav from "./components/FloatingNav/FloatingNav";
import Welcome from "./components/Welcome/Welcome";
import Countdown from "./components/Countdown/Countdown";
import Ceremony from "./components/Ceremony/Ceremony";
import Location from "./components/Location/Location";
import Ending from "./components/Ending/Ending";

export default function App() {
  return (
    <>
      <FloatingNav links={wedding.nav} />
      <Hero />
      <main>
        <Welcome data={wedding} />
        <Countdown target={wedding.date} />
        <Ceremony data={wedding} />
        <Location venue={wedding.venue} />
        <Ending data={wedding} />
      </main>
    </>
  );
}
