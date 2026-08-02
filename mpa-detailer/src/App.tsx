import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import { whatsappLink } from "./config";
import { useReveal } from "./hooks/useReveal";
import "./App.css";

function WhatsAppFab() {
  return (
    <a
      href={whatsappLink("Hi! I'd like to make an enquiry.")}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab"
      aria-label="Message us on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2a9.9 9.9 0 00-8.5 14.94L2 22l5.2-1.5A9.9 9.9 0 1012.04 2zm5.77 14.07c-.24.68-1.4 1.3-1.93 1.35-.52.05-1.01.24-3.4-.7-2.87-1.14-4.7-4.06-4.84-4.25-.14-.19-1.16-1.55-1.16-2.96 0-1.4.73-2.1 1-2.38.26-.29.57-.36.76-.36l.55.01c.18 0 .41-.06.64.5.24.57.8 1.97.87 2.11.07.14.12.31.02.5-.1.19-.14.3-.28.47l-.43.5c-.14.14-.28.3-.12.58.16.29.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.17-.19.7-.8.88-1.08.19-.29.38-.24.63-.14.26.09 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.17 1.37z" />
      </svg>
    </a>
  );
}

function App() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Process />
        <Pricing />
        <Projects />
        <Testimonials />
        <Faq />
      </main>
      <Contact />
      <WhatsAppFab />
    </>
  );
}

export default App;
