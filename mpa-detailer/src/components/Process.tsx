import "./Process.css";

const steps = [
  {
    num: "01",
    title: "Get in touch",
    desc: "Message us on WhatsApp with your car and what it needs. We usually reply the same day.",
  },
  {
    num: "02",
    title: "Quote",
    desc: "We assess the condition of the paint and interior, then give you a clear quote with no surprises.",
  },
  {
    num: "03",
    title: "We get to work",
    desc: "Your car gets premium products and proven methods. We send you progress photos along the way.",
  },
  {
    num: "04",
    title: "Handover",
    desc: "Pick up your car looking its best, along with tips on how to keep it that way for longer.",
  },
];

export default function Process() {
  return (
    <section className="process section section--alt" id="process">
      <div className="container">
        <div className="process-header reveal">
          <span className="section-label">How We Work</span>
          <h2 className="section-title">
            Simple, clear and <span className="text-red">no fuss</span>
          </h2>
        </div>

        <ol className="process-grid">
          {steps.map((s, i) => (
            <li key={s.num} className={`pstep reveal reveal-delay-${i + 1}`}>
              <span className="pstep__num">{s.num}</span>
              <div className="pstep__line" aria-hidden="true" />
              <h3 className="pstep__title">{s.title}</h3>
              <p className="pstep__desc">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
