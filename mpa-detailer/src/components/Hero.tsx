import { whatsappLink } from "../config";
import "./Hero.css";

const stats = [
  { value: "250+", label: "Cars detailed" },
  { value: "5★",   label: "Customer rating" },
  { value: "5+",   label: "Years of experience" },
  { value: "100%", label: "Premium products" },
];

const ticker = [
  "Auto Detailing", "Hand Wash", "Interior Deep Clean",
  "Exterior Detail", "Automotive Service", "Wash & Polish",
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb hero-orb--1" />
        <div className="hero-orb hero-orb--2" />
        <div className="hero-grid" />
        <div className="hero-beam" />
      </div>

      <div className="hero-content container">
        <p className="hero-eyebrow">
          <span className="hero-eyebrow__dot" />
          Professional detailing · Bundall, Gold Coast
        </p>

        <h1 className="hero-title">
          Your car, with<br />
          <span className="hero-accent">showroom shine</span><br />
          all over again.
        </h1>

        <p className="hero-sub">
          Car care studio in Bundall specialising in auto detailing, hand wash
          and automotive service. Premium products, proven methods and an
          obsession with the details.
        </p>

        <div className="hero-actions">
          <a
            href={whatsappLink("Hi! I'd like to book my car in.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Book Now
          </a>
          <a href="#gallery" className="btn btn--outline">See Results</a>
        </div>

        <dl className="hero-stats">
          {stats.map((s) => (
            <div key={s.label} className="hero-stat">
              <dt className="hero-stat__value">{s.value}</dt>
              <dd className="hero-stat__label">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll to next section">
        <span />
      </a>

      {/* Services ticker */}
      <div className="hero-ticker" aria-hidden="true">
        <div className="hero-ticker__track">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="hero-ticker__item">
              {t} <em>✦</em>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
