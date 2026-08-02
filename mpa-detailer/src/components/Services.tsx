import { whatsappLink } from "../config";
import "./Services.css";

const icons: Record<string, React.ReactNode> = {
  wrench: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 4a5 5 0 00-5 6.2L4 16.2A2 2 0 106.8 19l6-6A5 5 0 1015 4z" />
      <circle cx="5.6" cy="17.6" r="0.6" fill="currentColor" />
    </svg>
  ),
  shine: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
    </svg>
  ),
  wash: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c3 4 6 7 6 10a6 6 0 01-12 0c0-3 3-6 6-10z" />
      <path d="M9 14a3 3 0 003 3" />
    </svg>
  ),
};

const services = [
  {
    icon: "wrench",
    title: "Automotive Service",
    desc: "General vehicle care to keep your car looking and feeling its best, service after service.",
    items: ["Condition assessment", "Ongoing care plans", "Honest, upfront advice"],
  },
  {
    icon: "shine",
    title: "Auto Detailing",
    desc: "Full inside-and-out detail: we decontaminate, refine and protect every surface of your vehicle.",
    items: ["Interior deep clean", "Exterior decontamination", "Polish & protection"],
  },
  {
    icon: "wash",
    title: "Car Wash",
    desc: "Safe hand wash using the two-bucket method — no swirl marks, no harsh brushes, just a proper clean.",
    items: ["Two-bucket hand wash", "Wheels, tyres & glass", "Streak-free hand dry"],
  },
];

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="services-header reveal">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">
            Our <span className="text-red">Services</span>
          </h2>
          <p className="section-desc">
            Everything your vehicle needs to look its best — inside and out.
            Not sure which one suits you? Send us a message and we'll sort it out.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <a
              key={s.title}
              className={`svc card reveal reveal-delay-${(i % 3) + 1}`}
              href={whatsappLink(`Hi! I'd like to ask about your ${s.title} service.`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="svc__icon">{icons[s.icon]}</span>
              <h3 className="svc__title">{s.title}</h3>
              <p className="svc__desc">{s.desc}</p>

              <ul className="svc__list">
                {s.items.map((item) => (
                  <li key={item}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <span className="svc__cta">
                Enquire
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
