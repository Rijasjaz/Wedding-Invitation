import { useRef } from "react";
import useInView from "../../hooks/useInView";
export default function Reveal({ as: Tag = "section", className = "", children, ...rest }) {
  const ref = useRef(null);
  const seen = useInView(ref);
  return (
    <Tag ref={ref} className={`reveal ${seen ? "is-visible" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
