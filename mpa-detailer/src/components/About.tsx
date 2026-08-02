import "./About.css";

const features = [
  {
    num: "01",
    title: "Hand Wash",
    desc: "Two-bucket hand wash that lifts dirt without marring your paint — wheels, tyres and glass included.",
  },
  {
    num: "02",
    title: "Interior Care",
    desc: "Deep clean of seats, carpets, dashboard and plastics. Your cabin looks and smells brand new.",
  },
  {
    num: "03",
    title: "Exterior Detail",
    desc: "Decontamination, polish and protection to bring back the depth and gloss of your paintwork.",
  },
  {
    num: "04",
    title: "Automotive Service",
    desc: "General care to keep your vehicle in top shape, inside and out, wash after wash.",
  },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-header reveal">
          <span className="section-label">Who We Are</span>
          <h2 className="section-title">
            About <span className="text-red">MPA Detailer</span>
          </h2>
          <p className="section-desc">
            We're a Gold Coast car care studio based in Bundall. Every vehicle that
            comes through gets precision, care and the attention it deserves —
            with premium products and methods that actually protect your paint.
          </p>
        </div>

        <div className="about-grid">
          {features.map((f, i) => (
            <div key={f.num} className={`about-card card reveal reveal-delay-${i + 1}`}>
              <span className="about-card__num">{f.num}</span>
              <h3 className="about-card__title">{f.title}</h3>
              <p className="about-card__desc">{f.desc}</p>
              <div className="about-card__bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
