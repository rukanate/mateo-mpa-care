import { useState, useEffect, useCallback } from "react";
import { asset } from "../config";
import "./Projects.css";

/*
  Drop your images into: public/img/
  Naming: projecto1.jpg … projecto6.jpg
  (no spaces, no rebuild needed when you swap photos)
*/
const projects = [
  { id: 1, name: "Project 1", img: "img/projecto1.jpg" },
  { id: 2, name: "Project 2", img: "img/projecto2.jpg" },
  { id: 3, name: "Project 3", img: "img/projecto3.jpg" },
  { id: 4, name: "Project 4", img: "img/projecto4.jpg" },
  { id: 5, name: "Project 5", img: "img/projecto5.jpg" },
  { id: 6, name: "Project 6", img: "img/projecto6.jpg" },
];

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);

  const open = (i: number) => {
    setSelected(i);
    document.body.style.overflow = "hidden";
  };

  const close = useCallback(() => {
    setSelected(null);
    document.body.style.overflow = "";
  }, []);

  const prev = useCallback(
    () => setSelected((s) => (s === null ? s : (s + projects.length - 1) % projects.length)),
    []
  );
  const next = useCallback(
    () => setSelected((s) => (s === null ? s : (s + 1) % projects.length)),
    []
  );

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, close, prev, next]);

  return (
    <section className="projects section section--alt" id="projects">
      <div className="container">
        <div className="projects-header reveal">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Our <span className="text-red">Work</span>
          </h2>
          <p className="section-desc">
            Every job reflects our passion for precision and doing things properly.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <button
              key={p.id}
              className={`pcard reveal reveal-delay-${(i % 3) + 1}`}
              onClick={() => open(i)}
              aria-label={`View ${p.name} full size`}
            >
              <img src={asset(p.img)} alt={p.name} loading="lazy" decoding="async" />
              <span className="pcard__overlay">
                <strong>{p.name}</strong>
                <span className="pcard__zoom">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
                  </svg>
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={projects[selected].name} onClick={close}>
          <button className="lightbox__close" onClick={close} aria-label="Close">
            ×
          </button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox__nav lightbox__nav--prev"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
            >
              ‹
            </button>
            <img
              className="lightbox__img"
              src={asset(projects[selected].img)}
              alt={projects[selected].name}
            />
            <button
              className="lightbox__nav lightbox__nav--next"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
            >
              ›
            </button>
          </div>
          <p className="lightbox__caption">
            {projects[selected].name} — {selected + 1} / {projects.length}
          </p>
        </div>
      )}
    </section>
  );
}
