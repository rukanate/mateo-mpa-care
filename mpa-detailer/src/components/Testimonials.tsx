import "./Testimonials.css";

/*
  PLACEHOLDER reviews — swap these for real customer reviews
  (Google, Instagram) before going live.
*/
const reviews = [
  {
    name: "Jack T.",
    car: "Toyota HiLux — Surfers Paradise",
    text: "Took the ute in after a few months of beach trips and it came back looking better than the day I bought it. The attention to detail is next level.",
  },
  {
    name: "Emily R.",
    car: "Mazda CX-5 — Broadbeach",
    text: "The interior was wrecked after school runs and the dog. They brought it back to life — it honestly smells brand new. Highly recommend.",
  },
  {
    name: "Liam S.",
    car: "Ford Ranger — Southport",
    text: "Great communication from start to finish, sent photos as they went and the price was fair. The paint has never looked this good.",
  },
];

function Stars() {
  return (
    <span className="trev__stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z" />
        </svg>
      ))}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="testimonials-header reveal">
          <span className="section-label">Customers</span>
          <h2 className="section-title">
            What people say about <span className="text-red">us</span>
          </h2>
        </div>

        <div className="testimonials-grid">
          {reviews.map((r, i) => (
            <figure key={r.name} className={`trev card reveal reveal-delay-${i + 1}`}>
              <Stars />
              <blockquote className="trev__text">“{r.text}”</blockquote>
              <figcaption className="trev__author">
                <span className="trev__avatar">{r.name.charAt(0)}</span>
                <span>
                  <strong>{r.name}</strong>
                  <em>{r.car}</em>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
