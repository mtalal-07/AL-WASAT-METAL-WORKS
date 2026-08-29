import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SplitStatement } from "@/components/SplitStatement";
import { aboutPage } from "@/content/site-data";

export const metadata: Metadata = {
  title: aboutPage.meta.title,
  description: aboutPage.meta.description,
};

export default function AboutPage() {
  const { header, vision, badges, staff } = aboutPage;

  return (
    <main>
      <PageHeader
        heading={header.heading}
        lead={header.lead}
        image={header.image}
      />

      <Section background="white" paddingY="lg">
        <SplitStatement heading={vision.heading} paragraphs={vision.paragraphs} />
      </Section>

      <Section
        background="white"
        paddingY="md"
        className="border-t border-hairline"
      >
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-4">
          {badges.map((b) => (
            <div key={b.value} className="text-center">
              <div className="text-[20px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink sm:text-[22px]">
                {b.value}
              </div>
              <div className="mx-auto mt-2 max-w-[200px] text-[11px] leading-[1.5] text-body-muted">
                {b.label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section background="white" paddingY="lg">
        <SectionHeading>{staff.heading}</SectionHeading>
        <p className="mt-4 max-w-[620px] text-[14px] leading-[1.7] text-body">
          {staff.body}
        </p>

        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {staff.members.map((m) => (
            <div key={m.role}>
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={m.image.src}
                  alt={m.image.alt}
                  fill
                  sizes="(max-width: 1024px) 45vw, 280px"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-[15px] font-semibold leading-[1.35] text-ink">
                {m.role}
              </h3>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
