import Link from "next/link";
import { Section } from "../ui/Section";
import { CapabilityGrid } from "../CapabilityGrid";
import { homeProducts } from "@/content/products-data";

/** "Our Products" teaser — staggered 4-up grid + link to the full list. */
export function FeaturedProducts() {
  const items = homeProducts.map((product) => ({
    title: product.title,
    description: product.description,
    image: product.image,
    href: `/products/${product.slug}`,
  }));

  return (
    <Section background="white" paddingY="lg">
      <CapabilityGrid heading="Our Products" items={items} staggered />

      <div className="mt-16 flex justify-center">
        <Link
          href="/products"
          className="text-link text-ink hover:text-indigo"
        >
          View All Products →
        </Link>
      </div>
    </Section>
  );
}
