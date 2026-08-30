import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectRow } from "@/components/ProjectRow";
import { projectsPage } from "@/content/site-data";
import { projects } from "@/content/projects-data";

export const metadata: Metadata = {
  title: projectsPage.meta.title,
  description: projectsPage.meta.description,
};

export default function ProjectsPage() {
  const { header, clients } = projectsPage;

  return (
    <main>
      <PageHeader
        heading={header.heading}
        lead={header.lead}
        image={header.image}
      />

      <Section background="white" paddingY="lg">
        <div className="flex flex-col gap-20 lg:gap-28">
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </div>
      </Section>

      <Section
        background="white"
        paddingY="md"
        className="border-t border-hairline"
      >
        <SectionHeading>{clients.heading}</SectionHeading>
        <p className="mt-4 max-w-[520px] text-[16px] leading-[1.7] text-body">
          {clients.note}
        </p>
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {clients.items.map((name) => (
            <li
              key={name}
              className="border border-hairline px-3.5 py-2 text-[12px] leading-[1.4] text-body"
            >
              {name}
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
