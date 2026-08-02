import "./Faq.css";

const faqs = [
  {
    q: "How long does a full detail take?",
    a: "It depends on the size and condition of the vehicle. An express wash takes a couple of hours, while a full detail usually takes most of the day so we can do it properly.",
  },
  {
    q: "Do I need to book, or can I just turn up?",
    a: "We work by appointment so every car gets the time it deserves. Send us a message on WhatsApp and we'll find a day and time that suits you.",
  },
  {
    q: "Where are you based?",
    a: "We're in Bundall, right in the middle of the Gold Coast — easy to reach from Surfers Paradise, Southport, Broadbeach and surrounds.",
  },
  {
    q: "What's the difference between a wash and a full detail?",
    a: "A wash cleans the outside of your car safely and thoroughly. A full detail goes much further: interior deep clean, decontamination, polishing and protection for a lasting finish.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing depends on the size of your vehicle and how much work it needs. Send us a message with a few photos and we'll come back with an exact quote.",
  },
];

export default function Faq() {
  return (
    <section className="faq section section--alt" id="faq">
      <div className="container faq-inner">
        <div className="faq-header reveal">
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">
            Questions &amp; <span className="text-red">Answers</span>
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <details key={f.q} className={`faq-item reveal reveal-delay-${(i % 3) + 1}`}>
              <summary>
                {f.q}
                <span className="faq-item__icon" aria-hidden="true">+</span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
