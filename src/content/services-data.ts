/**
 * Single source of truth for the company's services.
 *
 * - The /services page renders ALL of `services` (16 entries).
 * - The landing page renders only the 4 in `homeServices` (a filtered view —
 *   it does not shrink or replace this array).
 *
 * Every image is a local file in /public/images/services/ named after the
 * service slug. Drop a `<slug>.jpg` in that folder and it appears — no code
 * change needed. (Extension in the filename can stay .jpg even for PNG/WebP;
 * next/image reads the format from the bytes.)
 */

export type Service = {
  slug: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
};

const img = (slug: string, alt: string) => ({
  src: `/images/services/${slug}.jpg`,
  alt,
});

export const services: Service[] = [
  {
    slug: "engineering-design-consultation",
    title: "Engineering Design & Consultation",
    description:
      "Calculations, re-engineering and detailed project drawings prepared before fabrication begins.",
    image: img("engineering-design-consultation", "Engineering design and drawing work"),
  },
  {
    slug: "steel-fabrication",
    title: "Steel Fabrication",
    description:
      "Structural and architectural steel cut, welded and finished to project specifications.",
    image: img("steel-fabrication", "Steel fabrication work"),
  },
  {
    slug: "stainless-steel-fabrication",
    title: "Stainless Steel Fabrication",
    description:
      "Precision stainless steel fabrication for architectural, hygienic and industrial applications.",
    image: img("stainless-steel-fabrication", "Stainless steel fabrication work"),
  },
  {
    slug: "aluminium-fabrication",
    title: "Aluminium Fabrication",
    description:
      "Lightweight aluminium assemblies fabricated for facades, fittings and industrial use.",
    image: img("aluminium-fabrication", "Aluminium fabrication work"),
  },
  {
    slug: "handrails-railing-systems",
    title: "Handrails & Railing Systems",
    description:
      "Aluminium, GMS and stainless handrails and railing systems for commercial and residential projects.",
    image: img("handrails-railing-systems", "Handrail and railing system installation"),
  },
  {
    slug: "industrial-metal-works",
    title: "Industrial Metal Works",
    description:
      "Platforms, walkways, gratings and support steel for plants and industrial facilities.",
    image: img("industrial-metal-works", "Industrial metal platform and walkway"),
  },
  {
    slug: "commercial-residential-staircases",
    title: "Commercial & Residential Staircases",
    description:
      "Straight, spiral and feature staircases engineered and installed to code.",
    image: img("commercial-residential-staircases", "Fabricated staircase installation"),
  },
  {
    slug: "fencing-systems",
    title: "Fencing Systems",
    description:
      "Barricade and mesh fencing systems for industrial and commercial sites.",
    image: img("fencing-systems", "Metal fencing system"),
  },
  {
    slug: "acoustic-barrier-works",
    title: "Acoustic Barrier Works",
    description:
      "Custom acoustic barrier walls and enclosures to control industrial noise.",
    image: img("acoustic-barrier-works", "Acoustic barrier wall"),
  },
  {
    slug: "acoustic-louvers",
    title: "Acoustic Louvers",
    description:
      "Sound-attenuating louvers for ventilation openings and plant rooms.",
    image: img("acoustic-louvers", "Acoustic louvers"),
  },
  {
    slug: "pipe-anchor-supports",
    title: "Pipe Anchor Supports",
    description:
      "Engineered anchor and guide support systems for piping infrastructure.",
    image: img("pipe-anchor-supports", "Pipe anchor support assembly"),
  },
  {
    slug: "machine-turning-works",
    title: "Machine Turning Works",
    description:
      "Precision turning and machining of metal components to tight tolerances.",
    image: img("machine-turning-works", "Machine turning of a metal component"),
  },
  {
    slug: "metal-bending-works",
    title: "Metal Bending Works",
    description:
      "Press-brake and roll bending for sheet, plate and section metal.",
    image: img("metal-bending-works", "Metal bending work"),
  },
  {
    slug: "acoustic-louver-door",
    title: "Acoustic Louver Door",
    description:
      "Access doors with integrated acoustic louvers for noise-rated enclosures.",
    image: img("acoustic-louver-door", "Acoustic louver door"),
  },
  {
    slug: "acoustic-attenuator-systems",
    title: "Acoustic Attenuator Systems",
    description:
      "Rectangular and circular attenuators to reduce noise in ducted air systems.",
    image: img("acoustic-attenuator-systems", "Ducted acoustic attenuator unit"),
  },
  {
    slug: "acoustic-fan-enclosure",
    title: "Acoustic Fan Enclosure",
    description:
      "Purpose-built enclosures that contain fan and equipment noise on site.",
    image: img("acoustic-fan-enclosure", "Acoustic fan enclosure"),
  },
];

/** Slugs featured on the landing page teaser. */
export const homeServiceSlugs = [
  "steel-fabrication",
  "stainless-steel-fabrication",
  "aluminium-fabrication",
  "handrails-railing-systems",
] as const;

/** Filtered view of `services` for the landing page (does not mutate `services`). */
export const homeServices: Service[] = homeServiceSlugs.map(
  (slug) => services.find((s) => s.slug === slug)!,
);
