import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeT = setTimeout(() => setFading(true), 2200);
    const hideT = setTimeout(() => setVisible(false), 2500);
    return () => {
      clearTimeout(fadeT);
      clearTimeout(hideT);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-300 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-6 animate-fade-in">
        <div className="animate-pulse">
          <Logo />
        </div>
        <div className="h-0.5 w-32 overflow-hidden rounded-full bg-primary/15">
          <div className="h-full w-1/2 bg-primary animate-[loaderbar_2.5s_ease-in-out_infinite]" />
        </div>
      </div>
      <style>{`
        @keyframes loaderbar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
}
