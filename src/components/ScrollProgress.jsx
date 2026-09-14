import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollProgress({ target }) {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const el = target?.current;
    if (!el) return;
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? (scrollTop / max) * 100 : 0);
      setShowTop(scrollTop > 400);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [target]);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      {showTop && (
        <button
          className="back-to-top"
          onClick={() => target.current?.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
}
