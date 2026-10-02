import { useEffect, useState } from "react";
const calc = (target) => {
  const d = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(d / 864e5),
    hours: Math.floor((d % 864e5) / 36e5),
    minutes: Math.floor((d % 36e5) / 6e4),
    seconds: Math.floor((d % 6e4) / 1e3),
  };
};
export default function useCountdown(target) {
  const [t, setT] = useState(() => calc(target));
  useEffect(() => {
    const id = setInterval(() => setT(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);
  return t;
}
