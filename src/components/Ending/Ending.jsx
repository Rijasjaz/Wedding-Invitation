import Reveal from "../common/Reveal";
import Decor from "../common/Decor";
import "./Ending.css";
export default function Ending({ data }) {
  return (
    <Reveal className="section ending">
      <Decor name="top-left" rotate={8} style={{ top: -3, left: -10, width: 230 }} />
      <Decor name="bottom-right" rotate={20} style={{ bottom: 5, right: 5, width: 190 }} />
      <h2 className="ending__names">
        <span>{data.groom}</span><span className="ending__amp">&amp;</span><span>{data.bride}</span>
      </h2>
      <div className="ending__heart" aria-hidden="true">♡</div>
      <p className="ending__date">{data.shortDate}</p>
      <p className="ending__hijri">({data.hijri})</p>
    </Reveal>
  );
}
