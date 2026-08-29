import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { contactPage } from "@/content/site-data";

export const metadata: Metadata = {
  title: contactPage.meta.title,
  description: contactPage.meta.description,
};

export default function ContactPage() {
  const { header, details, form } = contactPage;

  return (
    <main>
      <PageHeader heading={header.heading} lead={header.lead} image={header.image} />

      <Section background="white" paddingY="lg">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Contact details */}
          <div>
            <SectionHeading>{details.heading}</SectionHeading>
            <dl className="mt-8 flex flex-col gap-6">
              {details.items.map((item) => (
                <div key={item.label}>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.08em] text-body-muted">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 text-[14px] leading-[1.6] text-ink">
                    {"href" in item && item.href ? (
                      <a
                        href={item.href}
                        className="hover:text-indigo"
                        {...(item.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Contact form */}
          <div>
            <SectionHeading>{form.heading}</SectionHeading>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
