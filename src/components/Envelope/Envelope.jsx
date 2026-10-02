import "./Envelope.css";

export default function Envelope({ stage, onOpen }) {
  const isOpening = stage === "opening";
  const isOpen = stage === "open";

  return (
    <section
      className={`simple-opening ${
        isOpening ? "simple-opening--opening" : ""
      } ${isOpen ? "simple-opening--open" : ""}`}
    >
      <div className="simple-opening__content">
        <p className="simple-opening__subtitle">Together with their families</p>

        <div className="simple-opening__names">
          <h2>Rijas</h2>
          <span>&amp;</span>
          <h2>Rifana</h2>
        </div>

        <div className="simple-opening__line" />

        {/* <p className="simple-opening__date">03 January 2027</p> */}

        <button
          type="button"
          className="simple-opening__button"
          onClick={onOpen}
          disabled={isOpening || isOpen}
          aria-label="Open wedding invitation"
        >
          Open Invitation
        </button>
      </div>
    </section>
  );
}
