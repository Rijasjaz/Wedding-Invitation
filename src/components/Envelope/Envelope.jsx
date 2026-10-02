import "./Envelope.css";
export default function Envelope({ stage, onOpen }) {
  if (stage === "open") {
    return (
      <div className="envelope">
        <img src="/assets/envelope_back.png" alt="" className="envelope__back" />
        <img src="/assets/invitation.png" alt="Wedding invitation card" className="envelope__card" />
        <img src="/assets/envelope_front.png" alt="" className="envelope__front" />
      </div>
    );
  }
  return (
    <button type="button" className={`envelope-closed ${stage === "opening" ? "is-fading" : ""}`}
      onClick={onOpen} aria-label="Tap to open the invitation">
      <img src="/assets/envelope_closed.png" alt="" />
    </button>
  );
}
