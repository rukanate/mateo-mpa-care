/*
  Business details — edit everything from here.
  The WhatsApp number goes in international format, no "+" and no spaces.
*/
export const BUSINESS = {
  name: "MPA Detailer Car Care",
  owner: "Mateo Peralta",
  tagline: "Car Care & Detailing Studio",
  city: "Bundall, Gold Coast — Australia",
  phoneDisplay: "+61 451 366 384",
  phoneWhatsApp: "61451366384",
  email: "mateoperaltaa21@gmail.com",
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
  youtube: "https://www.youtube.com/",
  hours: "Mon to Sat — 9:00 am to 6:00 pm",
} as const;

/* Correct asset prefix in dev and on GitHub Pages */
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const whatsappLink = (message: string) =>
  `https://wa.me/${BUSINESS.phoneWhatsApp}?text=${encodeURIComponent(message)}`;
