import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CapabilityGrid } from "@/components/CapabilityGrid";
import { Button } from "@/components/ui/Button";
import { productsPage } from "@/content/site-data";
import { products } from "@/content/products-data";

export const metadata: Metadata = {
  title: productsPage.meta.title,
  description: productsPage.meta.description,
};

export default function ProductsPage() {
  const { header, cta } = productsPage;

  const items = products.map((product) => ({
    title: product.title,
    description: product.description,
    image: product.image,
    href: `/products/${product.slug}`,
  }));

  return (
    <main>
      <PageHeader
        heading={header.heading}
        lead={header.lead}
        image={header.image}
      />

      <Section background="white" paddingY="lg">
        <CapabilityGrid items={items} columns={3} />
      </Section>

      <Section background="indigo" paddingY="sm">
        <div className="flex flex-col gap-8 min-[901px]:flex-row min-[901px]:items-center min-[901px]:justify-between min-[901px]:gap-16">
          <div className="min-[901px]:max-w-[560px]">
            <SectionHeading tone="light">{cta.heading}</SectionHeading>
            <p className="mt-4 text-[15px] leading-[24px] text-white/78">
              {cta.body}
            </p>
          </div>
          <Button
            label={cta.button.label}
            href={cta.button.href}
            variant="primary"
            className="shrink-0"
          />
        </div>
      </Section>
    </main>
  );
}
