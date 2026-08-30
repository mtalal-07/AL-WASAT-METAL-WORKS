/**
 * Central image registry.
 *
 * Photos come from Unsplash (images.unsplash.com), each chosen to match the
 * subject briefs in plan.md §4. Swap any `src` for a licensed asset later —
 * keep the width/height ratio so the layout stays intact.
 */

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`;

export const images = {
  // 1 — Hero: large industrial plant exterior against a blue sky
  hero: {
    src: u("1727870752423-4d51d5b500c7", 2070),
    alt: "Large industrial processing plant exterior with steel ducting against a blue sky",
  },

  // 2 — Process showcase: local asset at metalix/public/images/videoImage.jpg
  video: {
    src: "/images/videoImage.jpg",
    alt: "Close-up of a CNC cutting head cutting a steel plate with a burst of sparks",
  },

  // 3 — Capability 1: hot metal / furnace pour
  cap1: {
    src: u("1697281679213-fcab27e10ad4", 900),
    alt: "Molten steel being poured in a mill, glowing orange with flying sparks",
  },
  // 4 — Capability 2: welder at a bench
  cap2: {
    src: u("1565043666747-69f6646db940", 900),
    alt: "Welder in protective gear working at a bench with bright arc light and sparks",
  },
  // 5 — Capability 3: production line receding into the distance
  cap3: {
    src: u("1716191300020-b52dec5b70a8", 900),
    alt: "Long automated factory production line with rows of machinery under overhead lighting",
  },
  // 6 — Capability 4: inspector's hands with a clipboard
  cap4: {
    src: u("1762341104168-63ddb56e9805", 900),
    alt: "Close-up of an inspector's hands checking off a form on a clipboard",
  },

  // 7 — Industries: fabrication shop with a yellow overhead gantry crane
  industries: {
    src: u("1787374412732-f863ecb18c7c", 900),
    alt: "Interior of a fabrication plant with a large yellow overhead gantry crane and coils of steel",
  },

  // 8 — Capabilities detail thumbnail: bundle of steel tubes seen end-on
  pipes: {
    src: u("1764835746713-34a671e73569", 400),
    alt: "Tightly packed bundle of steel tubes seen end-on under warehouse lighting",
  },

  // 9 — Full-bleed facility photo: local asset at metalix/public/images/Warehouse.jpg
  refinery: {
    src: "/images/Warehouse.jpg",
    alt: "Steel fabrication warehouse interior",
  },

  // 10 — Feature: fabricated steel assembly, near-cutout against a pale wall
  feature: {
    src: u("1775519520167-65f114b3ff99", 1000),
    alt: "Heavy-duty yellow steel gantry hoist assembly against a pale corrugated-metal wall",
  },

  // 11 — Yellow panel: clean automated factory with yellow floor lanes and a robot arm
  automated: {
    src: u("1716191299980-a6e8827ba10b", 1000),
    alt: "Ultra-clean automated factory hall with yellow floor lane markings and a robotic arm",
  },

  // 13 — Closing left: warehouse aisle with tall storage racks
  warehouse: {
    src: u("1714650601435-67a4d51a0798", 1200),
    alt: "Interior of a storage warehouse with tall racks receding down a central aisle",
  },
  // 13b — Landing closing CTA (bottom-left): local asset.
  // Drop the supplied photo at:  metalix/public/steel-warehouse.jpg
  steelWarehouse: {
    src: "/steel-warehouse.jpg",
    alt: "Steel fabrication warehouse interior with a yellow overhead crane and racks of steel sections",
  },
  // 14 — Closing right: low-angle steel structural framework against a bright sky
  framework: {
    src: u("1724660582276-6793ce7ba6b4", 1000),
    alt: "Low-angle view up through a dense steel structural framework against a bright overcast sky",
  },
} as const;

export type ImageKey = keyof typeof images;
