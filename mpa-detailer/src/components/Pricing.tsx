import { whatsappLink } from "../config";
import "./Pricing.css";

/*
  Edit the packages here. To show prices,
  swap price: "Get a quote" for the amount (e.g. "$120").
*/
const plans = [
  {
    name: "Express Wash",
    price: "Get a quote",
    tag: "Maintenance",
    featured: false,
    items: [
      "Two-bucket hand wash",
      "Wheels, tyres and arches",
      "Windows inside and out",
      "Streak-free hand dry",
      "Tyre shine finish",
    ],
  },
  {
    name: "Full Detail",
    price: "Get a quote",
    tag: "Most popular",
    featured: true,
    items: [
      "Everything in Express Wash",
      "Interior vacuum and wipe down",
      "Upholstery and carpet clean",
      "Dashboard and plastics dressed",
      "Door jambs and boot detailed",
    ],
  },
  {
    name: "Premium Detail",
    price: "Get a quote",
    tag: "Full treatment",
    featured: false,
    items: [
      "Everything in Full Detail",
      "Exterior decontamination",
      "Machine polish for gloss",
      "Paint protection applied",
      "Engine bay clean-up",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className="pricing-header reveal">
          <span className="section-label">Packages</span>
          <h2 className="section-title">
            Choose your <span className="text-red">level of detail</span>
          </h2>
          <p className="section-desc">
            Three packages to suit every need. Pricing depends on the size and
            condition of your vehicle — message us for an exact quote.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`plan card reveal reveal-delay-${i + 1}${p.featured ? " plan--featured" : ""}`}
            >
              <span className="plan__tag">{p.tag}</span>
              <h3 className="plan__name">{p.name}</h3>
              <p className="plan__price">{p.price}</p>

              <ul className="plan__items">
                {p.items.map((item) => (
                  <li key={item}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink(`Hi! I'd like a quote for the ${p.name} package.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${p.featured ? "btn--primary" : "btn--outline"} plan__btn`}
              >
                Enquire
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
