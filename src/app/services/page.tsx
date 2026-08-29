import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CapabilityGrid } from "@/components/CapabilityGrid";
import { Button } from "@/components/ui/Button";
import { servicesPage } from "@/content/site-data";
import { services } from "@/content/services-data";

export const metadata: Metadata = {
  title: servicesPage.meta.title,
  description: servicesPage.meta.description,
};

export default function ServicesPage() {
  const { header, cta } = servicesPage;

  return (
    <main>
      <PageHeader
        heading={header.heading}
        lead={header.lead}
        image={header.image}
      />

      <Section background="white" paddingY="lg">
        <CapabilityGrid items={services} columns={3} />
      </Section>

      <Section background="indigo" paddingY="sm">
        <div className="flex flex-col gap-8 min-[901px]:flex-row min-[901px]:items-center min-[901px]:justify-between min-[901px]:gap-16">
          <div className="min-[901px]:max-w-[560px]">
            <SectionHeading tone="light">{cta.heading}</SectionHeading>
            <p className="mt-4 text-[13px] leading-[22px] text-white/78">
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
