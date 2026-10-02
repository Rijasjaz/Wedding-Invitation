import Reveal from "../common/Reveal";
import Decor from "../common/Decor";
import useCountdown from "../../hooks/useCountdown";
import "./Countdown.css";
export default function Countdown({ target }) {
  const t = useCountdown(target);
  const units = [["Days", t.days], ["Hours", t.hours], ["Minutes", t.minutes], ["Seconds", t.seconds]];
  return (
    <Reveal className="section countdown">
      <Decor name="top-left" rotate={8} style={{ top: 10, left: -15, width: 170 }} />
      <p className="countdown__lead">Our special day is coming</p>
      <h2>Countdown</h2>
      <div className="countdown__grid" role="timer" aria-live="off">
        {units.map(([label, value]) => (
          <div className="countdown__unit" key={label}>
            <span className="countdown__num">{String(value).padStart(2, "0")}</span>
            <span className="countdown__label">{label}</span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
