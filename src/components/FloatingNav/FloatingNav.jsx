import useScrolledPast from "../../hooks/useScrolledPast";
import useActiveSection from "../../hooks/useActiveSection";
import "./FloatingNav.css";
export default function FloatingNav({ links }) {
  const visible = useScrolledPast(0.6);
  const active = useActiveSection(links.map((l) => l.id));
  return (
    <nav className={`nav ${visible ? "is-visible" : ""}`} aria-label="Sections">
      <span className="nav__mark" aria-hidden="true">♡</span>
      {links.map((l) => (
        <a key={l.id} href={`#${l.id}`} className={`nav__link ${active === l.id ? "is-active" : ""}`}
          tabIndex={visible ? 0 : -1}>{l.label}</a>
      ))}
    </nav>
  );
}
