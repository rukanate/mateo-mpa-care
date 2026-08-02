import { useState } from "react";
import { BUSINESS, whatsappLink } from "../config";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [car, setCar] = useState("");
  const [message, setMessage] = useState("");

  /* No backend: the form builds a message and opens it in WhatsApp. */
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Hi! I'm ${name.trim()}.` +
      (car.trim() ? ` I have a ${car.trim()}.` : "") +
      ` ${message.trim()}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="contact section" id="contact">
      <div className="container contact-inner">
        {/* Left — info */}
        <div className="contact-left reveal">
          <span className="section-label">Let's talk</span>
          <h2 className="section-title">
            Ready to <span className="text-red">transform</span>
            <br />your car?
          </h2>
          <p className="contact-sub">
            Send us a message and we'll book you in. We reply within 24 hours.
          </p>

          <ul className="contact-info">
            <li>
              <span className="contact-info__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <span>{BUSINESS.city}</span>
            </li>
            <li>
              <span className="contact-info__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h4l2 5-2.5 1.5a12 12 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
                </svg>
              </span>
              <a href={whatsappLink("Hi! I'd like to make an enquiry.")} target="_blank" rel="noopener noreferrer">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <span className="contact-info__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />
                </svg>
              </span>
              <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
            </li>
            <li>
              <span className="contact-info__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
                </svg>
              </span>
              <span>{BUSINESS.hours}</span>
            </li>
          </ul>

          <div className="contact-socials">
            <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="contact-social" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" />
              </svg>
            </a>
            <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer" className="contact-social" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 8h3V5h-3a4 4 0 00-4 4v3H7v3h3v6h3v-6h3l1-3h-4V9a1 1 0 011-1z" />
              </svg>
            </a>
            <a href={BUSINESS.youtube} target="_blank" rel="noopener noreferrer" className="contact-social" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2.5" y="6" width="19" height="12" rx="4" /><path d="M10 9.5l5 2.5-5 2.5z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div className="contact-right reveal reveal-delay-2">
          <form className="contact-form card" onSubmit={onSubmit}>
            <h3 className="contact-form__title">Get a quote</h3>
            <p className="contact-form__hint">
              Fill in the form and your message opens straight in our WhatsApp.
            </p>

            <div className="form-group">
              <label htmlFor="cf-name">Name</label>
              <input
                id="cf-name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={80}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="cf-car">Vehicle (optional)</label>
              <input
                id="cf-car"
                type="text"
                placeholder="Make, model and year"
                value={car}
                onChange={(e) => setCar(e.target.value)}
                maxLength={80}
              />
            </div>

            <div className="form-group">
              <label htmlFor="cf-msg">Message</label>
              <textarea
                id="cf-msg"
                placeholder="Tell us which service you need..."
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={600}
                required
              />
            </div>

            <button type="submit" className="btn btn--whatsapp contact-submit">
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="contact-bottom">
        <div className="container contact-bottom__inner">
          <p className="contact-bottom__brand">
            <strong>MPA</strong> Detailer
          </p>
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <div className="contact-bottom__socials">
            <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href={BUSINESS.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
