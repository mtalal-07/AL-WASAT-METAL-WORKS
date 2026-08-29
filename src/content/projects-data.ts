/**
 * Single source of truth for projects.
 *
 * - /projects renders all of `projects` as an alternating row list.
 * - /projects/[slug] renders one project's detail page.
 *
 * Every project image is a local file in /public/images/projects/ named after
 * the project slug. Drop a `<slug>.jpg` in that folder and it appears — no code
 * change needed. (Extension can be .jpg/.png/.webp; next/image reads the bytes,
 * but keep the filename matching the `image.src` below.)
 */

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: { src: string; alt: string };
};

const img = (slug: string, alt: string) => ({
  src: `/images/projects/${slug}.jpg`,
  alt,
});

export const projects: Project[] = [
  {
    slug: "aluminum-handrailings-fittings",
    title: "Aluminum Handrailings & Fittings",
    category: "Handrails & Fittings",
    description:
      "Custom aluminium, stainless steel, and galvanized steel handrails and fittings, fabricated and installed to meet commercial and residential project requirements with precise engineering and finish.",
    image: img(
      "aluminum-handrailings-fittings",
      "Installed aluminium handrailing and fittings",
    ),
  },
  {
    slug: "industrial-metal-platforms",
    title: "Industrial Metal Platforms",
    category: "Industrial Metal Works",
    description:
      "Heavy-duty platforms, staircases, walkways, and gratings engineered for industrial environments, built to withstand demanding operational conditions while ensuring safety and reliability.",
    image: img(
      "industrial-metal-platforms",
      "Fabricated industrial metal platform and walkway",
    ),
  },
  {
    slug: "commercial-handrails-staircases",
    title: "Commercial Handrails & Staircases",
    category: "Staircases",
    description:
      "Elegant commercial and residential staircase systems combining aesthetic appeal with structural integrity, custom-designed to complement architectural styles while meeting all safety standards and building codes.",
    image: img(
      "commercial-handrails-staircases",
      "Commercial staircase with handrail system",
    ),
  },
  {
    slug: "fencing-walls-barriers",
    title: "Fencing Walls & Barriers",
    category: "Fencing Systems",
    description:
      "Custom fencing solutions with mesh and barricade systems providing security and perimeter control, engineered for durability and designed to integrate seamlessly with surrounding infrastructure.",
    image: img("fencing-walls-barriers", "Installed perimeter fencing and barrier wall"),
  },
  {
    slug: "acoustic-barrier-works",
    title: "Acoustic Barrier Works",
    category: "Acoustic Solutions",
    description:
      "Industrial noise reduction barrier installations designed to control sound transmission effectively, engineered solutions that combine acoustic performance with structural integrity for demanding applications.",
    image: {
      src: "/images/projects/project-acoustic-barriers-2.jpg",
      alt: "Installed industrial acoustic barrier wall on site",
    },
  },
  {
    slug: "acoustic-louvers",
    title: "Acoustic Louvers",
    category: "Acoustic Solutions",
    description:
      "Specialized louvers combining ventilation and sound control for mechanical equipment enclosures, precision-engineered to balance airflow requirements with effective noise attenuation.",
    image: {
      src: "/images/projects/project-acoustic-louvers.jpg",
      alt: "Acoustic louvers fitted to a mechanical equipment enclosure",
    },
  },
  {
    slug: "piping-anchor-supports",
    title: "Piping Anchor Supports",
    category: "Structural Engineering",
    description:
      "Precision-engineered anchor supports for piping systems in industrial facilities, designed to handle thermal expansion, vibration, and operational loads while maintaining pipe alignment.",
    image: img("piping-anchor-supports", "Fabricated pipe anchor support assembly"),
  },
  {
    slug: "stainless-steel-works",
    title: "Stainless Steel Works",
    category: "Stainless Steel",
    description:
      "Corrosion-resistant fabrication for demanding environments including food processing, pharmaceutical, and marine applications, delivering premium quality stainless steel work with superior finishing.",
    image: img("stainless-steel-works", "Finished stainless steel fabrication"),
  },
  {
    slug: "metal-bending-works",
    title: "Metal Bending Works",
    category: "Custom Fabrication",
    description:
      "Precision bending for specialized metal components using advanced custom-built technology, ensuring accuracy and consistency executed with tight tolerances and consistent quality.",
    image: img("metal-bending-works", "Precision-bent metal components"),
  },
  {
    slug: "acoustic-louver-door",
    title: "Acoustic Louver Door",
    category: "Acoustic Solutions",
    description:
      "Custom-engineered acoustic louver doors designed to provide both ventilation and superior sound control, ideal for mechanical rooms, generator enclosures, and HVAC equipment spaces.",
    image: img("acoustic-louver-door", "Acoustic louver door installation"),
  },
  {
    slug: "acoustic-attenuator-systems",
    title: "Acoustic Attenuator Systems",
    category: "Acoustic Solutions",
    description:
      "Advanced acoustic attenuator systems engineered to significantly reduce noise levels in HVAC, duct, and industrial ventilation systems, featuring optimized baffle configurations for maximum sound absorption and minimal pressure drop.",
    image: img("acoustic-attenuator-systems", "Ducted acoustic attenuator unit"),
  },
  {
    slug: "acoustic-fan-enclosure",
    title: "Acoustic Fan Enclosure",
    category: "Acoustic Solutions",
    description:
      "Industrial-grade acoustic fan enclosures designed to contain and minimize noise from large structural and industrial equipment, combining robust structural materials to achieve significant noise reduction while ensuring optimal equipment performance and accessibility.",
    image: img("acoustic-fan-enclosure", "Acoustic enclosure around industrial fan equipment"),
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
