import Reveal from "../common/Reveal";
import Decor from "../common/Decor";
import "./Ceremony.css";
export default function Ceremony({ data }) {
  return (
    <Reveal id="ceremony" className="section ceremony">
      <Decor name="top-right" rotate={10} style={{ top: -20, right: 0, width: 150 }} />
      <Decor name="bottom-right" rotate={15} style={{ bottom: 5, right: -5, width: 260 }} />
      <h2>Nikkah Ceremony</h2>
      <article className="ceremony__card">
        <img src="/assets/icons/brautpaar.png" alt="" className="ceremony__icon" />
        <h3>{data.groom} &amp; {data.bride}</h3>
        <dl className="ceremony__details">
          <div><dt>Date</dt><dd>{data.displayDate}</dd></div>
          <div><dt>Time</dt><dd>{data.time}</dd></div>
        </dl>
      </article>
    </Reveal>
  );
}
