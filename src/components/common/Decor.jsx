import "./Decor.css";
const leaf = (name) => `/assets/decorations/eucalyptus-${name}.png`;
export default function Decor({ name, rotate = 0, style }) {
  return <img src={leaf(name)} alt="" className="decor" style={{ "--rotation": `${rotate}deg`, ...style }} />;
}
