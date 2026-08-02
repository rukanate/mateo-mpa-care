import BeforeAfter from "./BeforeAfter";
import { asset } from "../config";
import "./Gallery.css";

/*
  Drop your photos into:  public/img/gallery/
  Naming:  1-antes.jpg  /  1-despues.jpg  (as many ids as you like)
  Drag the divider on each card to compare.
*/
const pairs = [
  { id: 1, name: "Toyota HiLux",      service: "Full Exterior Detail" },
  { id: 2, name: "Ford Ranger",       service: "Wash & Polish" },
  { id: 3, name: "Mazda 3",           service: "Interior Deep Clean" },
  { id: 4, name: "Holden Commodore",  service: "Auto Detailing" },
  { id: 5, name: "Subaru WRX",        service: "Exterior Detail" },
  { id: 6, name: "Toyota LandCruiser", service: "Hand Wash & Interior" },
];

export default function Gallery() {
  return (
    <section className="gallery section section--alt" id="gallery">
      <div className="container">
        <div className="gallery-header reveal">
          <span className="section-label">Our Work</span>
          <h2 className="section-title">
            Before &amp; <span className="text-red">After</span>
          </h2>
          <p className="section-desc">
            Drag the divider across each photo to see the real transformation —
            no filters, no stock images.
          </p>
        </div>

        <div className="gallery-grid">
          {pairs.map((p, i) => (
            <figure key={p.id} className={`gcard reveal reveal-delay-${(i % 3) + 1}`}>
              <BeforeAfter
                before={asset(`img/gallery/${p.id}-antes.jpg`)}
                after={asset(`img/gallery/${p.id}-despues.jpg`)}
                alt={p.name}
              />
              <figcaption className="gcard__caption">
                <span className="gcard__service">{p.service}</span>
                <h3 className="gcard__name">{p.name}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
