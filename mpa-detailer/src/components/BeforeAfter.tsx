import { useRef, useState, useCallback } from "react";
import "./BeforeAfter.css";

type Props = {
  before: string;
  after: string;
  alt: string;
};

/*
  Draggable before/after comparison slider.
  Move the divider with the mouse, a finger or the arrow keys.
*/
export default function BeforeAfter({ before, after, alt }: Props) {
  const [pos, setPos] = useState(50);
  const [missing, setMissing] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (draggingRef.current) updateFromClientX(e.clientX);
  };

  const onPointerUp = () => { draggingRef.current = false; };

  if (missing) {
    return (
      <div className="ba ba--placeholder" aria-label={alt}>
        <span className="ba-placeholder__icon">🖼</span>
        <p>Photo coming soon</p>
      </div>
    );
  }

  return (
    <div
      ref={frameRef}
      className="ba"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <img
        className="ba-img ba-img--after"
        src={after}
        alt={`${alt} — after detailing`}
        loading="lazy"
        decoding="async"
        draggable={false}
        onError={() => setMissing(true)}
      />
      <div className="ba-clip" style={{ width: `${pos}%` }}>
        <img
          className="ba-img ba-img--before"
          src={before}
          alt={`${alt} — before detailing`}
          loading="lazy"
          decoding="async"
          draggable={false}
          onError={() => setMissing(true)}
        />
      </div>

      <span className="ba-badge ba-badge--before" style={{ opacity: pos > 18 ? 1 : 0 }}>
        Before
      </span>
      <span className="ba-badge ba-badge--after" style={{ opacity: pos < 82 ? 1 : 0 }}>
        After
      </span>

      <div className="ba-divider" style={{ left: `${pos}%` }} aria-hidden="true">
        <span className="ba-handle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l-6-6 6-6M15 6l6 6-6 6" />
          </svg>
        </span>
      </div>

      {/* Keyboard / screen-reader accessible control */}
      <input
        type="range"
        className="ba-range"
        min={0}
        max={100}
        value={Math.round(pos)}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Compare before and after: ${alt}`}
      />
    </div>
  );
}
