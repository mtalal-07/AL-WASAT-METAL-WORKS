import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { projects, getProject } from "@/content/projects-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Al Wasat Metal Works`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main>
      <PageHeader heading={project.title} lead={project.category} />

      <Section background="white" paddingY="lg">
        <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            priority
            sizes="(max-width: 1320px) 100vw, 1200px"
            className="object-cover"
          />
        </div>

        <div className="max-w-[680px]">
          <Eyebrow label={project.category} />
          <p className="mt-4 text-[16px] leading-[28px] text-body">
            {project.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Button
              label="Request Similar Project"
              href="/contact"
              variant="dark"
            />
            <Link
              href="/projects"
              className="text-link text-ink hover:text-indigo"
            >
              ← All Projects
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
