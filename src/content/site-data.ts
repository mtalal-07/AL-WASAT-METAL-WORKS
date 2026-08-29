/**
 * Centralised site content for Al Wasat Metal Works.
 * Swap copy here — pages and components read from this file, never hard-code strings.
 * NOTE: image references are placeholders and intentionally left unchanged.
 */

import { images } from "@/lib/images";

/* ------------------------------------------------------------------ */
/* Company                                                             */
/* ------------------------------------------------------------------ */

export const company = {
  name: "Al Wasat Metal Works",
  legalName: "Al Wasat Al Bared Eng. Turning LLC",
  since: "2016",
};

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const nav = {
  links: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Get a Quote", href: "/contact" },
};

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export const footer = {
  about: {
    heading: "Al Wasat Metal Works",
    body: "A UAE-based engineering, fabrication, and installation company delivering high-quality metal works since 2016.",
  },
  quickLinks: {
    heading: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
  contact: {
    heading: "Contact Us",
    items: [
      {
        text: "Shed # 22, Industrial Area # 1, Near Hardco Group, Sajja – Sharjah, UAE",
      },
      { text: "Tel: +971 6 534 4415", href: "tel:+97165344415" },
      { text: "Fax: +971 6 534 4425" },
      { text: "info@alwasatllc.ae", href: "mailto:info@alwasatllc.ae" },
    ],
  },
  social: {
    heading: "Follow Us",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
  copyright: "© 2026 Al Wasat Al Bared Eng. Turning LLC. All rights reserved.",
};

/* ------------------------------------------------------------------ */
/* Landing page                                                        */
/* ------------------------------------------------------------------ */

export const home = {
  hero: {
    heading: "Precision Metal Fabrication & Installation",
    subheading:
      "A trusted UAE-based engineering, fabrication, and installation company delivering steel, stainless steel, and aluminium metal works since 2016.",
    primary: { label: "Get a Quote", href: "/contact" },
    secondary: { label: "View Our Projects", href: "/projects" },
  },

  about: {
    heading: "Built on Strength. Driven by Precision.",
    paragraphs: [
      "Al Wasat Al Bared Eng. Turning LLC was established in 2016 as an engineering, fabrication, and installation company dedicated to supplying the metal construction industry in the UAE. We specialize in all engineered steel metal works, including aluminium, steel, and stainless steel.",
      "Our integrated approach — combining study, fabrication, and installation under one roof — enables us to provide comprehensive solutions and value-added services, offering our clients a seamless, one-stop solution.",
    ],
    link: { label: "Learn More", href: "/about" },
  },

  // The landing "Our Services" teaser is sourced from content/services-data.ts
  // (see `homeServices`) — not from this file.

  servicesBand: {
    statement:
      "We are committed to identifying and meeting our customers' needs through engineered studies, timely fabrication, and precise installation — delivered by professionally trained employees at competitive prices, with total client satisfaction.",
    link: { label: "Learn More About Us", href: "/about" },
    items: [
      "Handrails & Fittings (Aluminium, Steel, Stainless Steel)",
      "Industrial Metal Works (Platforms, Staircases, Walkways, Gratings)",
      "Fencing Walls (Barricade & Mesh)",
      "Acoustic Barriers & Louvers",
      "Piping Anchor Supports & SS Works",
    ],
  },

  manufacturing: {
    body: "Our workshop is equipped with modern machines, equipment, and tools, operated by a professionally certified team of welders and technicians to ensure efficiency, precision, and safety at every stage.",
    bullets: [
      "Certified Welders & Technicians",
      "Engineered Project Drawings",
      "Regular Equipment Maintenance",
      "Competitive, Transparent Pricing",
    ],
    button: { label: "Get a Quote", href: "/contact" },
  },

  feature: {
    heading:
      "Engineered Metal Works Built to Perform Under Real-World Conditions",
    left: {
      title: "Consistent Strength & Quality",
      body: "Our team of qualified engineers performs all necessary calculations and produces detailed project drawings before work begins, ensuring reliability and precision on every job.",
    },
    right: {
      title: "Trusted Across the UAE",
      body: "Our work is trusted by leading contractors and electromechanical firms across the UAE, including Siemens, Descon, and the Lootah Group.",
    },
  },

  panel: {
    headingLines: ["Skilled Team.", "Modern Machines."],
    body: "Our staff includes certified welders and trained technicians working with precise, well-maintained machines and equipment — ensuring every project is completed to the highest quality standard.",
    button: { label: "Get a Quote", href: "/contact" },
  },

  stats: {
    // NOTE: eyebrow + lead below are drafted from the company profile — reword freely.
    eyebrow: "Why Al Wasat Metal Works",
    lead: "We support Clients, Consultants, Contractors, Building Owners, and End Users with quality products that comply with relevant codes and standards.",
    badges: [
      {
        value: "Est. 2016",
        label: "Engineering, Fabrication & Installation",
      },
      { value: "UAE-Based", label: "Sharjah Industrial Area" },
      { value: "Certified Welders", label: "Professionally Trained Team" },
      {
        value: "One-Stop Solution",
        label: "Study, Fabrication & Installation",
      },
    ],
  },

  closing: {
    heading: "Looking for a Reliable Metal Fabrication Partner?",
    body: "Get in touch with our team to discuss your project requirements and production needs.",
    button: { label: "Request a Quote", href: "/contact" },
  },
};

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const aboutPage = {
  meta: {
    title: "About — Al Wasat Metal Works",
    description:
      "An engineering, fabrication, and installation company dedicated to the UAE's metal construction industry since 2016.",
  },
  header: {
    heading: "About Al Wasat Metal Works",
    lead: "Established in 2016, Al Wasat Al Bared Eng. Turning LLC is an engineering, fabrication, and installation company dedicated to the UAE's metal construction industry.",
    image: images.hero,
  },
  vision: {
    heading: "Our Vision",
    paragraphs: [
      "Our vision is to consistently support Clients, Consultants, Contractors, Building Owners, and End Users with top-notch services and quality products that comply with relevant codes and standards — delivering a faster, easier, and more profitable experience than our competitors.",
    ],
  },
  badges: home.stats.badges,
  staff: {
    heading: "Our Staff",
    body: "Our team consists of qualified, professional engineers capable of performing all necessary calculations and producing detailed project drawings before work begins. Our staff also includes professionally certified welders and technicians, equipped with precise, modern machines and tools.",
    members: [
      { role: "Qualified Engineers", image: images.cap2 },
      { role: "Certified Welders", image: images.cap1 },
      { role: "Skilled Technicians", image: images.cap3 },
      { role: "QA / QC Inspectors", image: images.cap4 },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export const servicesPage = {
  meta: {
    title: "Services — Al Wasat Metal Works",
    description:
      "Handrails, industrial metal works, fencing, acoustic barriers, piping anchor supports and stainless steel works across the UAE.",
  },
  header: {
    heading: "Our Services",
    lead: "Engineered metal works in aluminium, steel, and stainless steel — studied, fabricated, and installed across the UAE.",
    image: images.automated,
  },
  // The full service list is sourced from content/services-data.ts (`services`).
  cta: {
    heading: "Looking for a Reliable Metal Fabrication Partner?",
    body: "Get in touch with our team to discuss your project requirements and production needs.",
    button: { label: "Request a Quote", href: "/contact" },
  },
};

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export const projectsPage = {
  meta: {
    title: "Projects — Al Wasat Metal Works",
    description:
      "Completed metal fabrication and installation works across the UAE's construction and industrial sectors.",
  },
  header: {
    heading: "Our Projects",
    lead: "A selection of completed works across the UAE's construction and industrial sectors.",
    image: images.refinery,
  },
  // The project list + detail pages are sourced from content/projects-data.ts.
  clients: {
    heading: "Trusted By",
    note: "Client references from completed and ongoing work across the UAE.",
    items: [
      "Siemens",
      "Descon Abu Dhabi",
      "Lootah Group",
      "Al Dhabi Contracting LLC",
      "Trojan General Contracting",
      "Elemec Electromechanical",
      "State Construction",
      "Reliance Electromechanical",
      "Wall Tech Technology",
      "Conversion Electromechanical",
      "Fawaz Group",
      "Prime Electromechanical",
      "Al Marwaid General Contracting Group",
      "Specon Electromechanical",
      "Transgulf Electromechanical",
      "Fibrex",
      "Tech Group",
      "Unesia Aluminium Contracting Co. LLC",
      "Bosco Group",
      "Intercool Central Air Conditioning",
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Blog  (placeholder — no real content in the company profile yet)    */
/* ------------------------------------------------------------------ */

export const blogPage = {
  meta: {
    title: "News & Insights — Al Wasat Metal Works",
    description:
      "Company news and updates from Al Wasat Metal Works.",
  },
  header: {
    heading: "News & Insights",
    lead: "Company news and updates. Full articles coming soon.",
    image: images.framework,
  },
  posts: [
    {
      title: "Choosing the Right Metal for Heavy-Load Structures",
      excerpt:
        "How we weigh strength, corrosion resistance and cost when specifying steel, stainless steel or aluminium.",
      date: "",
      image: images.cap1,
    },
    {
      title: "Inside Our Fabrication Workshop",
      excerpt:
        "A walk through our machines and tooling, and the certified team that runs them.",
      date: "",
      image: images.automated,
    },
    {
      title: "What Code Compliance Actually Requires",
      excerpt:
        "The checks and drawings behind every job that meets relevant UAE codes and standards.",
      date: "",
      image: images.cap4,
    },
    {
      title: "Engineered Studies Before Fabrication",
      excerpt:
        "Why our engineers run the calculations and produce detailed drawings before any cutting begins.",
      date: "",
      image: images.cap2,
    },
    {
      title: "Installing Handrails and Platforms On Site",
      excerpt:
        "Coordination, safety and precision when installation moves from the workshop to the field.",
      date: "",
      image: images.warehouse,
    },
    {
      title: "Stainless Steel and Bending Works",
      excerpt:
        "A look at our precision stainless fabrication and metal bending capabilities.",
      date: "",
      image: images.cap3,
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const contactPage = {
  meta: {
    title: "Contact — Al Wasat Metal Works",
    description:
      "Get in touch with Al Wasat Metal Works in Sharjah to discuss your project requirements.",
  },
  header: {
    heading: "Get In Touch",
    lead: "Get in touch with our team to discuss your project requirements and production needs.",
    image: images.industries,
  },
  details: {
    heading: "Company Details",
    items: [
      {
        label: "Address",
        value:
          "Shed # 22, Industrial Area # 1, Near Hardco Group, Sajja – Sharjah, UAE",
      },
      { label: "Phone", value: "+971 6 534 4415", href: "tel:+97165344415" },
      { label: "Fax", value: "+971 6 534 4425" },
      {
        label: "Email",
        value: "info@alwasatllc.ae",
        href: "mailto:info@alwasatllc.ae",
      },
      {
        label: "Map",
        value: "View on Google Maps",
        href: "https://maps.app.goo.gl/CeGkjjdyqN83ruMz7",
      },
    ],
  },
  form: {
    heading: "Send a Message",
    fields: {
      name: "Full name",
      email: "Email address",
      message: "How can we help?",
    },
    submit: "Send Message",
    note: "This form is not wired to a backend yet.",
  },
};
