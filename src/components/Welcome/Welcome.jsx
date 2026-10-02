import Reveal from "../common/Reveal";
import Decor from "../common/Decor";
import "./Welcome.css";
export default function Welcome({ data }) {
  return (
    <Reveal id="welcome" className="section welcome">
      <Decor name="top-right" rotate={8} style={{ top: -15, right: -5 }} />
      <Decor name="bottom-left" rotate={-12} style={{ bottom: -5, left: -5 }} />
      <h2 className="arabic welcome__bismillah">{data.bismillah}</h2>
      <p className="welcome__meaning">{data.bismillahMeaning}</p>
      <h1 className="welcome__title">Wedding Invitation</h1>
      <p className="welcome__text">{data.invitation}</p>
    </Reveal>
  );
}
