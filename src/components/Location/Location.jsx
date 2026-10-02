import Reveal from "../common/Reveal";
import "./Location.css";
export default function Location({ venue }) {
  return (
    <Reveal id="location" className="section location">
      <h2>Location</h2>
      <div className="location__grid">
        <div className="location__card">
          <h3>{venue.name}</h3>
          <address className="location__address">{venue.lines.map((l) => <span key={l}>{l}</span>)}</address>
          <a className="location__btn" href={venue.mapLink} target="_blank" rel="noopener noreferrer">Open in Maps</a>
        </div>
        <div className="location__map">
          <iframe src={venue.embed} title={`Map of ${venue.name}`} loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
        </div>
      </div>
    </Reveal>
  );
}
