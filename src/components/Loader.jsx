import { useEffect, useState } from 'react';

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 900;
    let raf;
    const tick = (now) => {
      const pct = Math.min(100, ((now - start) / duration) * 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setFading(true);
        setTimeout(onDone, 350);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <div className={`loader ${fading ? 'loader-fade' : ''}`}>
      <div className="loader-mark">AH</div>
      <div className="loader-name">Ahmed Hassan Sayed</div>
      <div className="loader-tag eyebrow">WEB DEVELOPER PORTFOLIO</div>
      <div className="loader-bar-track">
        <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
