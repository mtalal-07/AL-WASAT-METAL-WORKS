/**
 * Single source of truth for the company's products.
 *
 * - The /products page renders ALL of `products` (12 entries).
 * - The landing page renders only the 4 in `homeProducts` (a filtered view —
 *   it does not shrink or replace this array).
 * - /products/[slug] renders one product's detail page.
 *
 * Images live in /public/images/products/ — use any filename you like and set
 * it on each product's `image.src` below (no need to match the URL slug).
 */

export type Product = {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: { src: string; alt: string };
};

const img = (file: string, alt: string) => ({
  src: `/images/Products/${file}`,
  alt,
});

export const products: Product[] = [
  {
    slug: "glass-racks-stand",
    title: "Glass Racks/Stand",
    description:
      "Custom-designed glass storage racks and display stands fabricated from premium stainless steel for commercial and industrial applications.",
    category: "Stainless Steel",
    image: img("Glass Racks.jpg", "Glass racks and stands"),
  },
  {
    slug: "canopy",
    title: "Canopy",
    description:
      "Engineered aluminium and steel canopy structures providing weather protection for commercial entrances and industrial facilities.",
    category: "Structural Solutions",
    image: img("Canopy.jpg", "Metal canopy structure"),
  },
  {
    slug: "acoustic-barrier",
    title: "Acoustic Barrier",
    description:
      "Industrial-grade acoustic barrier panels and sound walls designed to reduce noise pollution in manufacturing plants, highways, and urban environments.",
    category: "Acoustic Solutions",
    image: img("Accoustic Barrier.jpg", "Acoustic barrier panels"),
  },
  {
    slug: "acoustic-louvers",
    title: "Acoustic Louvers",
    description:
      "High-performance acoustic louver systems combining ventilation efficiency with superior noise attenuation for mechanical equipment and HVAC applications.",
    category: "Acoustic Solutions",
    image: img("Accoustic louvers.jpg", "Acoustic louver panels"),
  },
  {
    slug: "acoustic-louver-doors",
    title: "Acoustic Louver Doors",
    description:
      "Specialized acoustic louver door systems engineered to provide sound control while maintaining airflow and access for equipment rooms and mechanical spaces.",
    category: "Acoustic Solutions",
    image: img("Acoustic louver Door.jpg", "Acoustic louver doors"),
  },
  {
    slug: "acoustic-splitters-sound-attenuator",
    title: "Acoustic Splitters / Sound Attenuator",
    description:
      "Advanced acoustic splitter attenuators designed to reduce noise in HVAC ductwork and ventilation systems while maintaining optimal airflow performance.",
    category: "Acoustic Solutions",
    image: img("Accoustic Splitters.jpg", "Acoustic splitters and sound attenuators"),
  },
  {
    slug: "acoustic-fan-enclosure",
    title: "Acoustic Fan Enclosure",
    description:
      "Custom-engineered acoustic enclosures for industrial fans and blowers, significantly reducing operational noise while ensuring proper ventilation and maintenance access.",
    category: "Acoustic Solutions",
    image: img("Accoustic Fan Enclouser.jpg", "Acoustic fan enclosure"),
  },
  {
    slug: "anchor-support",
    title: "Anchor Support",
    description:
      "Heavy-duty anchor support systems and brackets engineered for industrial piping, structural members, and equipment mounting applications.",
    category: "Structural Engineering",
    image: img("Anchor Support.jpg", "Anchor support brackets"),
  },
  {
    slug: "inertia-base",
    title: "Inertia Base",
    description:
      "Precision-fabricated inertia bases and structural mounting frames designed to support rotating equipment, pumps, and compressors while minimizing vibration transmission.",
    category: "Structural Engineering",
    image: img("Interia Base.jpg", "Inertia base frame"),
  },
  {
    slug: "floor-mount-stair-case",
    title: "Floor Mount Stair Case",
    description:
      "Floor-mounted steel and stainless steel staircase systems designed for industrial and commercial buildings with durable construction and code-compliant safety features.",
    category: "Staircases",
    image: img("Floor Mount Staircase.jpg", "Floor mount staircase"),
  },
  {
    slug: "stainless-steel-tank",
    title: "Stainless Steel Tank",
    description:
      "Custom-fabricated stainless steel tanks and vessels engineered for industrial processing, chemical storage, and food-grade applications with full welding and testing certification.",
    category: "Stainless Steel",
    image: img("Stainless Steel Tank.jpg", "Stainless steel tank"),
  },
  {
    slug: "stainless-steel-tank-stand",
    title: "Stainless Steel Tank Stand",
    description:
      "Structural stainless steel and carbon steel support stands and frames designed for tank mounting with load-bearing capacity calculations and seismic considerations.",
    category: "Stainless Steel",
    image: img("Stainless Steel Tank Stand.jpg", "Stainless steel tank stand"),
  },
  {
    slug: "all-types-of-brackets",
    title: "All Types of Brackets",
    description:
      "Comprehensive range of custom-fabricated steel and stainless steel brackets including pipe supports, cable tray brackets, equipment mounting brackets, and structural connection hardware.",
    category: "Custom Fabrication",
    image: img("All Type Brackets.jpg", "Various metal brackets"),
  },
];

/** Landing page teaser entries — custom titles with links to matching product detail pages. */
export const homeProductEntries = [
  {
    slug: "glass-racks-stand",
    title: "Glass Racks/Stand",
  },
  {
    slug: "canopy",
    title: "Canopy",
  },
  {
    slug: "acoustic-barrier",
    title: "Acoustic Barriers",
  },
  {
    slug: "acoustic-louvers",
    title: "Acoustic Louvers",
  },
] as const;

/** Filtered view for the landing page (does not mutate `products`). */
export const homeProducts = homeProductEntries.map(({ slug, title }) => {
  const product = products.find((p) => p.slug === slug)!;
  return { ...product, title };
});

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
